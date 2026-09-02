import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "assets");

function svg({
  width = 1200,
  height = 800,
  label,
  sub = "PLACEHOLDER — replace asset",
  hue = 220,
}) {
  const c1 = `hsl(${hue} 70% 18%)`;
  const c2 = `hsl(${hue + 20} 80% 28%)`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="48" y="48" width="${width - 96}" height="${height - 96}" fill="none" stroke="#5B8CFF" stroke-opacity="0.45" stroke-width="2"/>
  <text x="50%" y="48%" text-anchor="middle" fill="#F5F6F8" font-family="Arial, sans-serif" font-size="${Math.round(width / 22)}" font-weight="700">${label}</text>
  <text x="50%" y="56%" text-anchor="middle" fill="#9AA1AC" font-family="Arial, sans-serif" font-size="${Math.round(width / 40)}">${sub}</text>
</svg>`;
}

function write(rel, contents) {
  const path = join(root, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents);
}

write(
  "logo.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="36" viewBox="0 0 180 36" role="img" aria-label="Orca-Tech">
  <circle cx="16" cy="18" r="12" fill="none" stroke="#2F6FFF" stroke-width="2.4"/>
  <path d="M8 20c6 6 12 6 16 0" fill="none" stroke="#5B8CFF" stroke-width="2"/>
  <text x="36" y="23" fill="#F5F6F8" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="0.6">ORCA-TECH</text>
</svg>`,
);

write(
  "og-placeholder.svg",
  svg({ width: 1200, height: 630, label: "Orca-Tech", sub: "OG IMAGE PLACEHOLDER", hue: 222 }),
);

console.log("Placeholder assets written to public/assets");
