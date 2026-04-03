import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1D1D1F",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            fontSize: "100px",
            fontWeight: 600,
            color: "white",
            letterSpacing: "-2px",
          }}
        >
          SF
        </span>
      </div>
    ),
    { ...size },
  );
}
