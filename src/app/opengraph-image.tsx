import { ImageResponse } from "next/og";

export const alt = "Safegot secure escrow for African commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#071121",
        color: "#f5faf7",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ color: "#35d98d", display: "flex", fontSize: 34, fontWeight: 700 }}>
        SAFEGOT
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 68,
          fontWeight: 700,
          letterSpacing: "-3px",
          lineHeight: 1.05,
          marginTop: 28,
          textAlign: "center",
        }}
      >
        The trust layer for African commerce.
      </div>
      <div
        style={{
          color: "#aab6c9",
          display: "flex",
          fontSize: 28,
          marginTop: 28,
        }}
      >
        Secure escrow, verified delivery, safer payments.
      </div>
    </div>,
    size,
  );
}
