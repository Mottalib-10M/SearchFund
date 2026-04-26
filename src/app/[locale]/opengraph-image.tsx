import { ImageResponse } from "next/og";
import { PHASE_COLORS } from "@/data/journey-phases";

export const alt = "How ETA Entrepreneurs Buy, Run & Exit Companies - SearchFundMarket";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const phases = [
  { label: "Prepare", color: PHASE_COLORS.prepare },
  { label: "Fundraise", color: PHASE_COLORS.fundraise },
  { label: "Search", color: PHASE_COLORS.search },
  { label: "Acquire", color: PHASE_COLORS.acquire },
  { label: "Operate", color: PHASE_COLORS.operate },
  { label: "Exit", color: PHASE_COLORS.exit },
];

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1D1D1F",
          padding: "60px 80px",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          How ETA Entrepreneurs Buy, Run & Exit Companies
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#86868B",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          From raising capital to your exit
        </div>

        {/* Phase row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          {phases.map((phase, i) => (
            <div
              key={phase.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: phase.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: phase.color,
                  }}
                >
                  {phase.label}
                </span>
              </div>

              {/* Arrow connector (not after last) */}
              {i < phases.length - 1 && (
                <div
                  style={{
                    fontSize: "20px",
                    color: "#48484A",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Branding */}
        <div
          style={{
            fontSize: "18px",
            color: "#48484A",
            marginTop: "auto",
            paddingTop: "40px",
          }}
        >
          SearchFundMarket
        </div>
      </div>
    ),
    { ...size }
  );
}
