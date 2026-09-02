using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

internal static class BakeGlobe
{
    private static float Saturate(float v)
    {
        if (v < 0f) return 0f;
        if (v > 1f) return 1f;
        return v;
    }

    private static float Smoothstep(float edge0, float edge1, float x)
    {
        float t = Saturate((x - edge0) / (edge1 - edge0));
        return t * t * (3f - 2f * t);
    }

    public static void Main(string[] args)
    {
        string dayPath = args[0];
        string lightsPath = args[1];
        string outPath = args[2];

        Bitmap daySrc = new Bitmap(dayPath);
        Bitmap lights = new Bitmap(lightsPath);
        int w = lights.Width;
        int h = lights.Height;

        Bitmap day = new Bitmap(w, h, PixelFormat.Format24bppRgb);
        Graphics g = Graphics.FromImage(day);
        g.InterpolationMode = InterpolationMode.HighQualityBicubic;
        g.DrawImage(daySrc, 0, 0, w, h);
        g.Dispose();
        daySrc.Dispose();

        Bitmap output = new Bitmap(w, h, PixelFormat.Format24bppRgb);
        BitmapData dayData = day.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format24bppRgb);
        BitmapData lightData = lights.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, lights.PixelFormat);
        BitmapData outData = output.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format24bppRgb);

        int lightBpp = Image.GetPixelFormatSize(lights.PixelFormat) / 8;
        byte[] dayBuf = new byte[Math.Abs(dayData.Stride) * h];
        byte[] lightBuf = new byte[Math.Abs(lightData.Stride) * h];
        byte[] outBuf = new byte[Math.Abs(outData.Stride) * h];
        Marshal.Copy(dayData.Scan0, dayBuf, 0, dayBuf.Length);
        Marshal.Copy(lightData.Scan0, lightBuf, 0, lightBuf.Length);

        float[] landMask = new float[w * h];
        float[] landBlur = new float[w * h];
        float[] cityMask = new float[w * h];
        float[] iceMask = new float[w * h];

        for (int y = 0; y < h; y++)
        {
            int dayRow = y * dayData.Stride;
            int lightRow = y * lightData.Stride;
            float latDeg = 90f - y / (float)(h - 1) * 180f;
            float polarLat = latDeg < 0f ? -latDeg : latDeg;
            float polar = Smoothstep(55.8f, 79.2f, polarLat);
            for (int x = 0; x < w; x++)
            {
                int di = dayRow + x * 3;
                int li = lightRow + x * lightBpp;
                float db = dayBuf[di] / 255f;
                float dg = dayBuf[di + 1] / 255f;
                float dr = dayBuf[di + 2] / 255f;
                float lb = lightBuf[li] / 255f;
                float lg = lightBpp > 1 ? lightBuf[li + 1] / 255f : lb;
                float lr = lightBpp > 2 ? lightBuf[li + 2] / 255f : lb;

                float luma = (dr + dg + db) * 0.333f;
                float blueDom = db - Math.Max(dr, dg);
                int i = y * w + x;
                landMask[i] = 1f - Smoothstep(-0.01f, 0.16f, blueDom);
                iceMask[i] = Smoothstep(0.5f, 0.82f, luma) * polar;
                float city = lr;
                if (lg > city) city = lg;
                if (lb > city) city = lb;
                cityMask[i] = Smoothstep(0.27f, 0.5f, city);
            }
        }

        BoxBlur(landMask, landBlur, w, h, 7);

        for (int y = 0; y < h; y++)
        {
            int outRow = y * outData.Stride;
            for (int x = 0; x < w; x++)
            {
                int i = y * w + x;
                float land = landBlur[i];
                float ice = iceMask[i];
                float city = cityMask[i];

                float oceanR = 0.05f, oceanG = 0.11f, oceanB = 0.26f;
                float landR = 0.20f;
                float landG = 0.46f;
                float landB = 0.98f;
                float r = oceanR + (landR - oceanR) * land;
                float gc = oceanG + (landG - oceanG) * land;
                float b = oceanB + (landB - oceanB) * land;

                r += (0.72f - r) * ice;
                gc += (0.84f - gc) * ice;
                b += (1.00f - b) * ice;

                r += city * 0.85f;
                gc += city * 0.95f;
                b += city * 1.05f;

                outBuf[outRow + x * 3] = (byte)(Saturate(b) * 255f);
                outBuf[outRow + x * 3 + 1] = (byte)(Saturate(gc) * 255f);
                outBuf[outRow + x * 3 + 2] = (byte)(Saturate(r) * 255f);
            }
        }

        Marshal.Copy(outBuf, 0, outData.Scan0, outBuf.Length);
        day.UnlockBits(dayData);
        lights.UnlockBits(lightData);
        output.UnlockBits(outData);

        ImageCodecInfo encoder = GetJpegEncoder();
        EncoderParameters props = new EncoderParameters(1);
        props.Param[0] = new EncoderParameter(Encoder.Quality, 95L);
        output.Save(outPath, encoder, props);

        output.Dispose();
        day.Dispose();
        lights.Dispose();
        Console.WriteLine("Wrote " + outPath);
    }

    private static ImageCodecInfo GetJpegEncoder()
    {
        ImageCodecInfo[] codecs = ImageCodecInfo.GetImageEncoders();
        for (int i = 0; i < codecs.Length; i++)
        {
            if (codecs[i].MimeType == "image/jpeg") return codecs[i];
        }
        throw new InvalidOperationException("JPEG encoder missing");
    }

    private static void BoxBlur(float[] src, float[] dst, int w, int h, int radius)
    {
        float[] temp = new float[w * h];
        int span = radius * 2 + 1;
        for (int y = 0; y < h; y++)
        {
            for (int x = 0; x < w; x++)
            {
                float acc = 0f;
                for (int k = -radius; k <= radius; k++)
                {
                    int xx = x + k;
                    if (xx < 0) xx = 0;
                    if (xx >= w) xx = w - 1;
                    acc += src[y * w + xx];
                }
                temp[y * w + x] = acc / span;
            }
        }
        for (int y = 0; y < h; y++)
        {
            for (int x = 0; x < w; x++)
            {
                float acc = 0f;
                for (int k = -radius; k <= radius; k++)
                {
                    int yy = y + k;
                    if (yy < 0) yy = 0;
                    if (yy >= h) yy = h - 1;
                    acc += temp[yy * w + x];
                }
                dst[y * w + x] = acc / span;
            }
        }
    }
}
