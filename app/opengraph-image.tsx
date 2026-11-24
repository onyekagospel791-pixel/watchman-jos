
import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#191F1E",
          color: "#FBF8F1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, display: "flex" }}>
          {site.name}
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#D9A227",
            marginTop: 16,
            fontStyle: "italic",
            display: "flex",
          }}
        >
          {site.designation}
        </div>

        <div
          style={{
            fontSize: 24,
            color: "rgba(251,248,241,0.75)",
            marginTop: 28,
            display: "flex",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
