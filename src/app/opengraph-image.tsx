import { ImageResponse } from "next/og";
import { COLORS, SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const alt = "ContractLossExpert — contract loss expert witness services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: `linear-gradient(135deg, ${COLORS.primary} 0%, #0f172a 55%, ${COLORS.accent} 100%)`,
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: COLORS.highlight,
            marginBottom: 24,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Contract Loss Expert Witness
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            lineHeight: 1.4,
            maxWidth: 820,
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Lost profits, wasted expenditure, and breach of contract quantum
        </div>
      </div>
    ),
    { ...size }
  );
}
