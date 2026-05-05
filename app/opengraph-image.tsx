import { ImageResponse } from "next/og";

// Static OG image route. Next 14 builds this once at build time.
export const runtime = "edge";
export const alt = "WaconiaGuide — Discover Waconia, Minnesota";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f1f35 0%, #1a6fba 100%)",
          color: "white",
          padding: 80,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              color: "#1a6fba",
              fontWeight: 800,
            }}
          >
            ✳
          </div>
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            WaconiaGuide
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: 40,
          }}
        >
          <span
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 24,
            }}
          >
            Your definitive travel guide
          </span>
          <h1
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Discover Waconia,<br />Minnesota
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.8)",
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Lake. Downtown. Events. Local guides written by locals.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
            waconiaminnesota.org
          </span>
          <span style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
            Carver County · Minnesota
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
