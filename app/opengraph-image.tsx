import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name}, ${site.tagline}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a8a8a8",
            marginBottom: 28,
            display: "flex",
          }}
        >
          {site.town}
        </div>
        <div
          style={{
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -2,
            textTransform: "uppercase",
            lineHeight: 1,
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            color: "#a8a8a8",
            display: "flex",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
