import { ImageResponse } from "next/og";
import { allArticles, categorySlugMap } from "../_articles/article-registry";

export const alt = "SearchFundMarket Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return allArticles.map((a) => ({ articleSlug: a.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ articleSlug: string }>;
}) {
  const { articleSlug } = await params;
  const article = allArticles.find((a) => a.slug === articleSlug);

  const title = article?.title ?? "Article";
  const category = article?.category ?? "";
  const catSlug = category ? categorySlugMap[category] : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1D1D1F",
          padding: "60px 80px",
        }}
      >
        {catSlug && (
          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#0071E3",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            {category}
          </div>
        )}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#86868B",
            marginTop: "auto",
          }}
        >
          SearchFundMarket
        </div>
      </div>
    ),
    { ...size }
  );
}
