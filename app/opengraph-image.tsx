import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "edge";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#0A1628",
          borderBottom: "8px solid #C9A76B",
          color: "#E8DFC8",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 88px 64px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#C9A76B",
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "8px",
          }}
        >
          FC GROUP
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.08,
            maxWidth: 1000,
          }}
        >
          L&apos;IA au service des entrepreneurs maliens
        </div>
        <div style={{ color: "#C9A76B", display: "flex", fontSize: 28 }}>
          fcgroupml.com — Bamako, Mali
        </div>
      </div>
    ),
    size,
  );
}
