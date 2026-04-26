import { ImageResponse } from "next/og";

export const alt =
  "Search Fund Industry Data & Statistics — SearchFundMarket";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stats = [
  { value: "681", label: "Funds raised" },
  { value: "35.1%", label: "Gross IRR" },
  { value: "4.5x", label: "Gross MOIC" },
  { value: "94", label: "New in 2023" },
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
            fontSize: "52px",
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Search Fund Industry Data
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#86868B",
            textAlign: "center",
            marginTop: "12px",
          }}
        >
          Verified statistics from Stanford GSB, IESE & Yale SOM
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "48px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#22c55e",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#A1A1AA",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
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
