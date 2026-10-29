export function DashboardSkeleton() {
  return (
    <section
      className="min-h-screen bg-background p-6 md:p-10"
      role="status"
      aria-label="Loading dashboard"
    >
      <div className="mx-auto w-full max-w-[1400px] space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-[420px] max-w-full" />
        </div>

        {/* Statistic cards */}
        <div className="grid grid-cols-1 divide-y divide-gray-100 overflow-hidden rounded-2xl bg-white shadow-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="space-y-3 px-5 py-5">
              <Skeleton className="h-4 w-24" />
              <Skeleton className={`h-6 ${index === 4 ? "w-16" : "w-32"}`} />
            </div>
          ))}
        </div>

        {/* Trend chart */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <Skeleton className="h-6 w-24" />

            <div className="flex gap-5">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          <div className="relative h-[200px] overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-gray-100" />
            <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-gray-100" />
            <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-gray-100" />

            <div className="absolute bottom-7 left-0 right-0 flex items-end justify-between px-3">
              {[35, 58, 42, 72, 48, 65, 38, 76, 52, 68, 44, 60].map(
                (height, index) => (
                  <div
                    key={index}
                    className="w-2 rounded-full bg-[#cccccc] sm:w-3"
                    style={{ height: `${height}px` }}
                  />
                ),
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-3">
              <Skeleton className="h-3 w-8" />
              <Skeleton className="h-3 w-8" />
              <Skeleton className="h-3 w-8" />
              <Skeleton className="h-3 w-8" />
            </div>
          </div>
        </div>

        {/* Transactions heading and buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Skeleton className="h-7 w-56" />

          <div className="flex gap-3">
            <Skeleton className="h-10 w-36 rounded" />
            <Skeleton className="h-10 w-40 rounded" />
          </div>
        </div>

        {/* Transactions table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          {/* Table header */}
          <div className="hidden grid-cols-7 gap-4 border-b border-gray-200 bg-gray-50 px-5 py-3 md:grid">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full max-w-24" />
            ))}
          </div>

          {/* Table rows */}
          {Array.from({ length: 7 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 gap-3 border-b border-gray-100 px-5 py-4 last:border-b-0 md:grid-cols-7 md:items-center md:gap-4"
            >
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-24 rounded-md" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center">
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block animate-none rounded-md bg-[#e3e3e3] ${className}`}
    />
  );
}
