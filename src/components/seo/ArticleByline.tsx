interface ArticleBylineProps {
  datePublished: string;
  dateModified: string;
}

export default function ArticleByline({ datePublished, dateModified }: ArticleBylineProps) {
  const published = new Date(datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updated = new Date(dateModified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-8 text-sm text-apple-gray-500">
      <p>By SearchFundMarket Editorial Team</p>
      <p className="mt-1">
        Published {published}
        {datePublished !== dateModified && <> · Updated {updated}</>}
      </p>
    </div>
  );
}
