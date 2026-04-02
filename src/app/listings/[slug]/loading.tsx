export default function ListingLoading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <div className="h-4 w-14 bg-apple-gray-100 rounded" />
        <div className="h-4 w-3 bg-apple-gray-100 rounded" />
        <div className="h-4 w-20 bg-apple-gray-100 rounded" />
        <div className="h-4 w-3 bg-apple-gray-100 rounded" />
        <div className="h-4 w-16 bg-apple-gray-100 rounded" />
      </div>

      {/* Title */}
      <div className="h-9 w-3/4 bg-apple-gray-100 rounded-lg mt-4" />

      {/* Subtitle */}
      <div className="h-5 w-48 bg-apple-gray-100 rounded mt-2" />

      {/* Tags */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-6 w-24 bg-apple-gray-100 rounded-full" />
        <div className="h-6 w-20 bg-apple-gray-100 rounded-full" />
        <div className="h-6 w-28 bg-apple-gray-100 rounded-full" />
      </div>

      {/* Financial metrics */}
      <div className="mt-8 bg-apple-gray-100 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <div className="h-3 w-16 bg-apple-gray-300 rounded" />
              <div className="h-8 w-24 bg-apple-gray-300 rounded mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Overview section */}
      <div className="mt-12">
        <div className="h-6 w-24 bg-apple-gray-100 rounded" />
        <div className="mt-4 space-y-2.5">
          <div className="h-4 w-full bg-apple-gray-100 rounded" />
          <div className="h-4 w-full bg-apple-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-apple-gray-100 rounded" />
          <div className="h-4 w-full bg-apple-gray-100 rounded" />
          <div className="h-4 w-3/4 bg-apple-gray-100 rounded" />
        </div>
      </div>

      {/* Highlights section */}
      <div className="mt-12">
        <div className="h-6 w-36 bg-apple-gray-100 rounded" />
        <div className="mt-4 space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-5 w-5 bg-apple-gray-100 rounded-full shrink-0" />
              <div className="h-4 w-3/4 bg-apple-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Company details section */}
      <div className="mt-12">
        <div className="h-6 w-40 bg-apple-gray-100 rounded" />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 py-2 border-b border-apple-gray-100"
            >
              <div className="h-4 w-24 bg-apple-gray-300 rounded" />
              <div className="h-4 w-20 bg-apple-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="mt-12 bg-apple-gray-100 rounded-2xl p-8">
        <div className="h-6 w-56 bg-apple-gray-300 rounded" />
        <div className="h-4 w-80 bg-apple-gray-300 rounded mt-3" />
        <div className="mt-6 flex items-center gap-3">
          <div className="h-10 w-28 bg-apple-gray-300 rounded-full" />
          <div className="h-10 w-36 bg-apple-gray-300 rounded-full" />
        </div>
        <div className="mt-8 pt-6 border-t border-apple-gray-300 flex items-center gap-3">
          <div className="w-10 h-10 bg-apple-gray-300 rounded-full" />
          <div>
            <div className="h-4 w-32 bg-apple-gray-300 rounded" />
            <div className="h-3 w-24 bg-apple-gray-300 rounded mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
