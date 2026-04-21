export default function ListingsLoading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header skeleton */}
      <div className="h-10 w-80 bg-apple-gray-100 rounded animate-pulse" />
      <div className="mt-2 h-5 w-64 bg-apple-gray-100 rounded animate-pulse" />

      {/* Filter bar skeleton */}
      <div className="mt-8 flex gap-3">
        <div className="h-10 flex-1 min-w-[220px] bg-apple-gray-100 rounded-lg animate-pulse" />
        <div className="h-10 w-28 bg-apple-gray-100 rounded-lg animate-pulse" />
        <div className="h-10 w-28 bg-apple-gray-100 rounded-lg animate-pulse" />
        <div className="h-10 w-24 bg-apple-gray-100 rounded-lg animate-pulse" />
        <div className="h-10 w-24 bg-apple-gray-100 rounded-lg animate-pulse" />
        <div className="h-10 w-20 bg-apple-gray-100 rounded-lg animate-pulse" />
      </div>

      {/* Listing row skeletons */}
      <div className="mt-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-b border-apple-gray-100 py-6">
            {/* Title + country */}
            <div className="flex items-start justify-between gap-4">
              <div className="h-5 w-72 bg-apple-gray-100 rounded animate-pulse" />
              <div className="h-4 w-24 bg-apple-gray-100 rounded animate-pulse" />
            </div>
            {/* Summary */}
            <div className="mt-2 h-4 w-full bg-apple-gray-100 rounded animate-pulse" />
            <div className="mt-1 h-4 w-3/4 bg-apple-gray-100 rounded animate-pulse" />
            {/* Metrics */}
            <div className="mt-3 flex gap-6">
              <div className="h-4 w-24 bg-apple-gray-100 rounded animate-pulse" />
              <div className="h-4 w-20 bg-apple-gray-100 rounded animate-pulse" />
              <div className="h-4 w-20 bg-apple-gray-100 rounded animate-pulse" />
              <div className="h-4 w-12 bg-apple-gray-100 rounded animate-pulse" />
            </div>
            {/* Tags */}
            <div className="mt-2 flex gap-2">
              <div className="h-5 w-20 bg-apple-gray-100 rounded-full animate-pulse" />
              <div className="h-5 w-16 bg-apple-gray-100 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
