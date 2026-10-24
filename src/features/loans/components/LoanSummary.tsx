import {
  ArrowRight,
  Info,
  Trash2,
  Landmark,
  Hourglass,
  Activity,
  IndianRupee,
} from "lucide-react";
import { formatCurrency, formatMonths } from "../../../lib/format";
import type { LoanQuoteResult } from "../../../types/loan";
import { StatTile } from "./StatTile";

interface Props {
  quote: LoanQuoteResult;
  isApplying: boolean;
  error: string | null;
  onProceed: () => void;
  onCancel: () => void;
}

export function LoanSummary({
  quote,
  isApplying,
  error,
  onProceed,
  onCancel,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#f9f9f9] rounded-sm p-10">
        <div className="flex items-start justify-between">
          <h3 className="font-heading font-bold text-[21px] text-[#1f395e]">
            The loan you are applying for
          </h3>

          <div
            className="relative group flex items-center gap-1.5 text-brand text-[10px] font-bold cursor-help"
            tabIndex={0}
          >
            <Info className="size-4" /> How is this calculated?
            <div className="absolute right-0 top-6 z-10 hidden group-hover:block group-focus:block w-72 rounded-md bg-ink p-3 text-xs font-normal leading-5 text-white shadow-lg">
              Interest = {formatCurrency(quote.requestedAmount)} ×{" "}
              {quote.interestPercentage}% × ({quote.tenorMonths} ÷ 12) ={" "}
              {formatCurrency(quote.interestAmount)}. You repay the amount plus
              interest.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <StatTile
            icon={Landmark}
            label="Loan Amount"
            value={formatCurrency(quote.requestedAmount)}
          />
          <StatTile
            icon={Hourglass}
            label="Loan Tenor"
            value={formatMonths(quote.tenorMonths)}
          />
          <StatTile
            icon={Activity}
            label="Interest Rate"
            value={`${quote.interestPercentage}%`}
          />
          <StatTile
            icon={IndianRupee}
            label="Repayment Amount"
            value={formatCurrency(quote.repaymentAmount)}
          />
        </div>
      </div>

      {error && <p className="text-brand text-sm">{error}</p>}

      <div className="flex gap-4">
        <button
          onClick={onProceed}
          disabled={isApplying}
          className="bg-brand text-white text-[11px] font-semibold rounded-full px-6 py-3 flex items-center gap-2 disabled:opacity-50"
        >
          {isApplying ? "Processing..." : "Proceed with this application"}{" "}
          <ArrowRight className="size-4" />
        </button>
        <button
          onClick={onCancel}
          disabled={isApplying}
          className="border border-brand text-brand text-[11px] font-semibold rounded-full px-6 py-3 flex items-center gap-2 disabled:opacity-50"
        >
          Cancel Application <Trash2 className="size-4" />
        </button>
      </div>
    </div>
  );
}
