interface Props {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  page,
  pageSize,
  totalCount,
  onPageChange,
}: Props) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalCount);

  const buttonClass =
    "bg-white border border-[#e7e9ee] rounded-lg px-4 py-2.5 text-sm font-semibold disabled:text-[#b7bec8] disabled:cursor-not-allowed";
  return (
    <div className="flex items-center justify-end gap-10 px-5 py-4 bg-background border-t border-[#d9dade] text-sm font-medium text-[#526174]">
      <span>Rows per page: {pageSize}</span>
      <span>
        {start}–{end} of {totalCount}
      </span>
      <div className="flex gap-3">
        <button
          className={buttonClass}
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          ← Previous
        </button>
        <button
          className={`${buttonClass} text-[#5358da]`}
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
