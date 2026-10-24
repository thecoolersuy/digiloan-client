import {
  Activity,
  ArrowRight,
  Hourglass,
  Landmark,
  PiggyBank,
  Trash2,
} from "lucide-react";
import { formatCurrency, formatMonths } from "../../../lib/format";
import type { EligibilityResult } from "../../../types/loan";
import { StatTile } from "./StatTile";

interface Props {
  eligibility: EligibilityResult;
  showActions: boolean;
  onApply: () => void;
  onCancel: () => void;
}

export function QualifiedPanel({
  eligibility,
  showActions,
  onApply,
  onCancel,
}: Props) {
  return (
    <div className="bg-[#f4fdf3] rounded-sm p-10">
      <h2 className="font-heading font-bold text-[22px] text-[#29a221]">
        You qualify for a loan
      </h2>
      <p className="text-[11px] text-ink mt-3 max-w-xl">
        Based on your transaction history and credit score, you qualify for a
        loan. Feel free to continue with the application.
      </p>

      <h3 className="font-heading font-bold text-[15px] text-[#1f395e] mt-6 mb-3">
        What do you qualify for
      </h3>
      <div className="flex flex-wrap gap-4">
        <StatTile
          icon={Landmark}
          label="Maximum Loan Amount"
          value={formatCurrency(eligibility.maxApprovedAmount)}
        />
        <StatTile
          icon={Hourglass}
          label="Loan Tenor"
          value={`Up to ${formatMonths(eligibility.maxLoanTenor)}`}
        />
        <StatTile
          icon={Activity}
          label="Interest Rate"
          value={`${eligibility.interestRate}%`}
        />
        <StatTile
          icon={PiggyBank}
          label="Credit Score"
          value={String(eligibility.creditScore)}
        />
      </div>

      {showActions && (
        <div className="flex gap-4 mt-8">
          <button
            onClick={onApply}
            className="bg-brand text-white text-[11px] font-semibold rounded-full px-6 py-3 flex items-center gap-2"
          >
            Apply for the loan <ArrowRight className="size-4" />
          </button>
          <button
            onClick={onCancel}
            className="border border-brand text-brand text-[11px] font-semibold rounded-full px-6 py-3 flex items-center gap-2"
          >
            Cancel Application <Trash2 className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
