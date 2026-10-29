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
        {/* Trend chart skeleton */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <Skeleton className="h-6 w-24" />

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9dce4]" />
                <Skeleton className="h-3.5 w-14" />
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9dce4]" />
                <Skeleton className="h-3.5 w-14" />
              </div>
            </div>
          </div>

          <div className="relative h-[220px] w-full overflow-hidden">
            {/* Horizontal chart guides */}
            <div className="absolute inset-0 flex flex-col justify-between pb-7">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-px w-full bg-[#eef0f3]" />
              ))}
            </div>

            {/* Soft chart line placeholder */}
            <svg
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="
    M 0 112
    C 55 108, 78 103, 112 91
    C 155 76, 205 74, 250 78
    C 310 83, 350 98, 400 106
    C 445 113, 462 108, 485 84
    C 510 61, 550 58, 578 82
    C 603 103, 612 124, 638 126
    C 665 128, 678 78, 708 66
    C 740 53, 770 66, 790 89
    C 810 109, 837 108, 861 101
    C 899 91, 924 108, 950 100
    C 970 94, 988 81, 1000 68
  "
                fill="none"
                stroke="#bfc4d2"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                className="animate-pulse"
              />
            </svg>
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
