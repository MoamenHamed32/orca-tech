import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orca-Tech",
    short_name: "Orca-Tech",
    description:
      "Orca-Tech is a software house building e-commerce, mobile apps, SEO, AI products, and cloud platforms.",
    start_url: "/en",
    display: "browser",
    background_color: "#0a0c10",
    theme_color: "#0a0c10",
    icons: [
      { src: "/favicon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: "/icon.png", type: "image/png", sizes: "192x192", purpose: "any" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512", purpose: "any" },
      { src: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
