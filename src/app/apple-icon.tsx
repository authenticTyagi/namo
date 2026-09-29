import { ImageResponse } from "next/og";

// iOS home-screen icon. Next.js App Router serves this at /apple-icon.png
// automatically. No image-generation tool is available in this project, so
// this renders the same checkmark-seal mark as src/app/icon.svg /
// src/components/BrandMark.tsx via code instead of a raster asset — keep
// all three in sync if the design changes.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width={180} height={180} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#1a73e8" />
        <path
          d="M9 16.5L14 21.5L23 10.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    { ...size },
  );
}
