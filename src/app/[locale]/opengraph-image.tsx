import { ImageResponse } from "next/og";

export const alt = "SearchFundMarket";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          SearchFundMarket
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#86868B",
            textAlign: "center",
            marginTop: "24px",
            maxWidth: "800px",
          }}
        >
          The leading knowledge platform for Entrepreneurship Through Acquisition in Europe
        </div>
      </div>
    ),
    { ...size }
  );
}
