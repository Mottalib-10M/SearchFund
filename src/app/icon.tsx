import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "50%",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "white",
            letterSpacing: "-0.5px",
          }}
        >
          SF
        </span>
      </div>
    ),
    { ...size },
  );
}
