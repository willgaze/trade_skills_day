import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Trade Skills Day - Hands-on trade taster workshops";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          {/* Orange accent line */}
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#f97316",
              marginBottom: "30px",
              borderRadius: "2px",
            }}
          />

          {/* Main title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Trade Skills Day
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              lineHeight: 1.4,
              marginBottom: "30px",
            }}
          >
            Hands-on taster workshops in tiling, plastering & plumbing
          </div>

          {/* Location badges */}
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <div
              style={{
                padding: "12px 24px",
                backgroundColor: "#1e293b",
                borderRadius: "8px",
                color: "#f97316",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Andover
            </div>
            <div
              style={{
                padding: "12px 24px",
                backgroundColor: "#1e293b",
                borderRadius: "8px",
                color: "#f97316",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Marlborough
            </div>
          </div>

          {/* Bottom tagline */}
          <div
            style={{
              marginTop: "40px",
              fontSize: 18,
              color: "#64748b",
            }}
          >
            1–2 day experience days • Small groups • All equipment provided
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
