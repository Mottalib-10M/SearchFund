import type { ArticleSource } from "@/app/[locale]/learn/_articles/article-registry";

interface ArticleSourcesProps {
  sources: ArticleSource[];
}

export default function ArticleSources({ sources }: ArticleSourcesProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-apple-gray-100">
      <h2 className="text-lg font-semibold text-apple-black">
        Sources &amp; References
      </h2>
      <ol className="mt-4 space-y-2 list-decimal list-inside">
        {sources.map((source, i) => (
          <li key={i} className="text-sm text-apple-gray-700">
            <span className="font-medium">{source.name}</span>
            {" - "}
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-accent hover:underline"
              >
                {source.title}
              </a>
            ) : (
              <span>{source.title}</span>
            )}
            {source.year && (
              <span className="text-apple-gray-500"> ({source.year})</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
