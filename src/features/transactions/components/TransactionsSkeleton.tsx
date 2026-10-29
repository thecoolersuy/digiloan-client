export function TransactionSkeleton() {
  return (
    <section
      className="min-h-screen bg-background p-6 md:p-10"
      role="status"
      aria-label="Loading transactions"
    >
      <div className="flex flex-col gap-6">
        {/* Page heading and date filter */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-4 w-80 max-w-[65vw]" />
          </div>

          <Skeleton className="h-11 w-36 rounded-md" />
        </div>

        {/* Transaction table */}
        <div className="overflow-hidden rounded-3xl border border-[#d9dade] bg-white">
          {/* Table header */}
          <div className="hidden grid-cols-7 gap-4 border-b border-[#e4e5e7] bg-[#fafafa] px-5 py-3 md:grid">
            {[
              "Date",
              "Ledger Id",
              "Account Number",
              "Source Account",
              "Amount",
              "Transaction Type",
              "Destination Account",
            ].map((label) => (
              <Skeleton key={label} className="h-3.5 w-full max-w-28" />
            ))}
          </div>

          {/* Loading rows */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-3 border-b border-[#e4e5e7] px-5 py-4 last:border-b-0 md:grid-cols-7 md:items-center md:gap-4"
            >
              <div className="flex items-center justify-between md:block">
                <Skeleton className="h-3.5 w-28" />
                <span className="text-xs text-gray-300 md:hidden">
                  Transaction {index + 1}
                </span>
              </div>

              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="h-3.5 w-28" />
              <Skeleton className="h-3.5 w-16" />
              <Skeleton className="h-6 w-24 rounded-md" />
              <Skeleton className="h-3.5 w-32" />
            </div>
          ))}

          {/* Pagination */}
          <div className="flex flex-col gap-4 border-t border-[#d9dade] bg-background px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:gap-10">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-20" />

            <div className="flex gap-3">
              <Skeleton className="h-11 w-28 rounded-lg" />
              <Skeleton className="h-11 w-20 rounded-lg" />
            </div>
          </div>
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
