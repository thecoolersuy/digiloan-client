import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { TransactionsTable } from "../../../components/TransactionsTable";
import { Pagination } from "../../../components/Pagination";
import { useTransactions } from "../hooks/useTransactions";

const pageSize = 10;

const ranges = [
  { label: "All time", days: null },
  { label: "Last 7 days", days: 7 },
  { label: "Last 14 days", days: 14 },
  { label: "Last 30 days", days: 30 },
];

export function TransactionsPage() {
  const [page, setPage] = useState(1);
  const [rangeDays, setRangeDays] = useState<number | null>(null);
  const [isRangeOpen, setIsRangeOpen] = useState(false);
  const rangeMenuRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, isFetching } = useTransactions({
    page,
    pageSize: pageSize,
    rangeDays,
  });

  useEffect(() => {
    if (data && page > 1 && data.items.length === 0) setPage(1);
  }, [data, page]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        rangeMenuRef.current &&
        !rangeMenuRef.current.contains(event.target as Node)
      ) {
        setIsRangeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const selectedRange = ranges.find((range) => range.days === rangeDays);

  const handleRangeChange = (value: string) => {
    setRangeDays(value === "all" ? null : Number(value));
    setPage(1);
    setIsRangeOpen(false);
  };

  return (
    <section className="min-h-screen p-6 md:p-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-noto font-bold text-2xl text-ink">
              Transactions
            </h1>
            <p className="text-sm text-gray-500">
              Overview of your transaction history.{" "}
              <span className="text-[#2859a8] font-semibold">
                (Sample data seeded for testing)
              </span>
            </p>
          </div>

          <div className="relative" ref={rangeMenuRef}>
            <button
              type="button"
              onClick={() => setIsRangeOpen((open) => !open)}
              className="flex min-w-36 items-center justify-between gap-3 rounded-md border border-[#b8bbc2] bg-background px-4 py-2.5 text-left text-sm font-medium text-ink transition-colors hover:border-[#b8bbc2] "
              aria-haspopup="listbox"
              aria-expanded={isRangeOpen}
              aria-label="Date range"
            >
              {selectedRange?.label}
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`shrink-0 transition-transform ${
                  isRangeOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isRangeOpen && (
              <ul
                className="absolute right-0 z-10 mt-2 w-full min-w-36 overflow-hidden rounded-md border border-[#b8bbc2] bg-background p-1 shadow-lg"
                role="listbox"
                aria-label="Date range options"
              >
                {ranges.map((range) => {
                  const value =
                    range.days === null ? "all" : String(range.days);
                  const isSelected = range.days === rangeDays;

                  return (
                    <li
                      key={range.label}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <button
                        type="button"
                        onClick={() => handleRangeChange(value)}
                        className={`w-full rounded px-3 py-2 text-left text-sm transition-colors  font-medium ${
                          isSelected ? "bg-black text-white" : "text-ink"
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {isLoading && (
          <p className="text-center py-20 text-gray-500">
            Loading transactions...
          </p>
        )}
        {isError && (
          <p className="text-center py-20 text-brand">
            Could not load transactions.
          </p>
        )}

        {data && data.totalCount === 0 && (
          <div className="bg-white rounded-2xl shadow-sm py-16 text-center text-gray-500">
            <p>No transactions found.</p>
            <Link to="/dashboard" className="text-brand font-semibold text-sm">
              Seed sample data from the Overview page →
            </Link>
          </div>
        )}

        {data && data.totalCount > 0 && (
          <div className="rounded-3xl overflow-hidden border border-[#d9dade]">
            <div
              className={
                isFetching
                  ? "opacity-60 transition-opacity"
                  : "transition-opacity"
              }
            >
              <TransactionsTable entries={data.items} />
            </div>
            <Pagination
              page={page}
              pageSize={pageSize}
              totalCount={data.totalCount}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
