import { site } from "@/lib/content";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  //fetch the image directly from your public URL at build time 
  const imageURL = new URL("/images/crest.png", import.meta.url);
  const imageResponse = await fetch(imageURL);
  const imageBuffer = await imageResponse.arrayBuffer();
  const crest = Buffer.from(imageBuffer).toString("base64");

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${crest}`}
          width={80}
          height={80}
          style={{ marginBottom: 40, borderRadius: "50%" }}
        />
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, display: "flex" }}>
          {site.name}
        </div>
        <div style={{ fontSize: 30, color: "#D9A227", marginTop: 16, fontStyle: "italic", display: "flex" }}>
          {site.designation}
        </div>
        <div style={{ fontSize: 24, color: "rgba(251,248,241,0.75)", marginTop: 28, maxWidth: 900, display: "flex" }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
