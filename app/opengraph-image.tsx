import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Fetch the image dynamically relative to the current file URL
  const crestData = await fetch(
    new URL("./public/images/crest.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Convert arrayBuffer to base64 string
  const crestBase64 = Buffer.from(crestData).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`data:image/png;base64,${crestBase64}`}
          width="100"
          height="100"
          alt="Crest"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}