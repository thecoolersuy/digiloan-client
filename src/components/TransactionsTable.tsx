import type { LedgerEntryDto } from "../types/dashboard";

const typeStyles: Record<string, string> = {
  OpeningBalance: "bg-[#e0f4eb] text-[#198d67]",
  SalaryCredit: "bg-[#e0f4eb] text-[#198d67]",
  UtilityBill: "bg-[#f5edcf] text-[#a78a26]",
  QrPayment: "bg-[#faece7] text-[#d45840]",
  LoanDisbursement: "bg-blue-50 text-blue-700",
};

function formatType(type: string) {
  return type.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase();
}

export function TransactionsTable({ entries }: { entries: LedgerEntryDto[] }) {
  return (
    <div className="bg-[#fafafa] border border-[#d9dade] rounded-lg overflow-hidden">
      <div className="grid grid-cols-7 gap-4 px-5 py-3 border-b border-[#e4e5e7] text-sm font-semibold text-[#1f395e]">
        <span>Date</span>
        <span>Ledger Id</span>
        <span>Account Number</span>
        <span>Source Account</span>
        <span>Amount</span>
        <span>Transaction Type</span>
        <span>Destination Account</span>
      </div>

      {entries.map((entry) => (
        <div
          key={entry.displayId}
          className="grid grid-cols-7 gap-4 px-5 py-3.5 border-b border-[#e4e5e7] items-center text-sm"
        >
          <span className="text-gray-500">
            {new Date(entry.createdAtUtc).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="text-[#5f69db]">{entry.displayId}</span>
          <span className="text-gray-500">{entry.sourceAccountNumber}</span>
          <span className="font-semibold text-ink">{entry.sourceLabel}</span>
          <span className="text-gray-500">{entry.amount.toLocaleString()}</span>
          <span>
            <span
              className={`rounded-md px-2 py-1 text-[10px] font-semibold ${typeStyles[entry.transactionType] ?? "bg-gray-100 text-gray-700"}`}
            >
              {formatType(entry.transactionType)}
            </span>
          </span>
          <span className="font-semibold text-ink">
            {entry.destinationLabel}
          </span>
        </div>
      ))}
    </div>
  );
}
