import { ImageResponse } from "next/og";
import { guides, getGuideBySlug } from "../../lib/guides";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuideBySlug(params.slug);
  return [{ id: "default", alt: guide?.title ?? "WaconiaGuide" }];
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  const title = guide?.title ?? "WaconiaGuide";
  const section = guide?.articleSection ?? "Guide";
  const updated = guide?.updatedDate ?? "";

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
          padding: 72,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                color: "#1a6fba",
                fontWeight: 800,
              }}
            >
              ✳
            </div>
            <span
              style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}
            >
              WaconiaGuide
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {section}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: 24,
          }}
        >
          <h1
            style={{
              fontSize: title.length > 60 ? 56 : 68,
              fontWeight: 800,
              letterSpacing: -1.5,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 1050,
            }}
          >
            {title}
          </h1>
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
          <span style={{ fontSize: 20, color: "rgba(255,255,255,0.7)" }}>
            waconiaminnesota.org
          </span>
          {updated && (
            <span style={{ fontSize: 20, color: "rgba(255,255,255,0.7)" }}>
              Updated {updated}
            </span>
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
