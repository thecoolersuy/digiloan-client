import { formatCurrency, formatDate, formatMonths } from "../../../lib/format";
import type { LoanApplication } from "../../../types/loan";
import { LoanStatusBadge } from "./LoanStatusBadge";

const headers = [
  "Date",
  "Application No.",
  "Requested Amount",
  "Interest Rate",
  "Loan Tenor",
  "Loan Status",
  "Repayment Date",
];

export function LoanApplicationsTable({ items }: { items: LoanApplication[] }) {
  if (items.length === 0) {
    return (
      <div className="bg-[#fafafa] border border-[#d9dade] py-10 text-center text-sm text-gray-500">
        No loan applications yet.
      </div>
    );
  }
  console.log("Loan applications:", items);

  return (
    <div className="bg-[#fafafa] border border-[#d9dade] overflow-x-auto">
      <div className="min-w-225">
        <div className="grid grid-cols-7 gap-4 px-5 py-4 border-b border-[#e4e5e7] text-[15px] font-semibold text-[#1f395e]">
          {headers.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>

        {items.map((loan) => (
          <div
            key={loan.id}
            className="grid grid-cols-7 gap-4 px-5 py-4 border-b border-[#e4e5e7] items-center text-sm"
          >
            <span className="text-[#7f838c]">
              {formatDate(loan.createdAtUtc)}
            </span>
            <span className="text-[#5f69db]">{loan.id}</span>
            <span className="font-medium text-ink">
              {formatCurrency(loan.requestedAmount)}
            </span>
            <span className="font-semibold text-ink">{loan.interestRate}%</span>
            <span className="text-[#7f838c]">
              {formatMonths(loan.loanTenor)}
            </span>
            <span>
              <LoanStatusBadge status={loan.status} />
            </span>
            <span className="text-[#7f838c]">
              {formatDate(loan.repaymentDate)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
