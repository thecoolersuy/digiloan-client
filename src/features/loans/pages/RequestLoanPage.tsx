import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import type {
  LoanApplicationResult,
  LoanQuoteResult,
} from "../../../types/loan";
import {
  useDisbuseLoan,
  useEligibility,
  useLoanApplication,
  useLoanQuote,
} from "../hooks/useLoanService";
import { formatCurrency, formatDate } from "../../../lib/format";
import { queryKeys } from "../../../api/queryKeys";

type Step = "landing" | "check" | "apply";
function RequestLoanPage() {
  const queryClient = useQueryClient();
  const [step, setStep] = useState<Step>("landing");
  const [result, setResult] = useState<LoanApplicationResult | null>(null);

  const applications = useLoanApplication();
  const eligibility = useEligibility();
  const quote = useLoanQuote();
  const disburse = useDisbuseLoan();
  const eligibilityData = eligibility.data;

  const reset = () => {
    quote.reset();
    disburse.reset();
    queryClient.removeQueries({ queryKey: queryKeys.eligibility });
    setStep("landing");
  };
  const handleProceed = (quote: LoanQuoteResult) => {
    disburse.mutate(
      {
        requestedAmount: quote.requestedAmount,
        requestedLoanTenor: quote.tenorMonths,
      },
      {
        onSuccess: (response) => {
          setResult(response);
          reset();
        },
      },
    );
  };
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading font-bold text-[22px] text-ink">
          Request Loan
        </h1>
        <p className="text-[13px] text-[#8d9199]">
          * Fill out the loan application to get the loan.{" "}
          <span className="text-[#2859a8] font-semibold">
            (Sample data seeded for testing)
          </span>
        </p>
      </div>
      {result && (
        <div className="bg-[#f4fdf3] border border-[#29a221] rounded-sm px-5 py-4 flex items-start justify-between gap-4">
          <p className="text-sm text-ink">
            <span className="font-semibold text-[#29a221]">
              Loan disbursed.
            </span>{" "}
            {formatCurrency(result.disbursedAmount)} was added to your balance.
            Repay {formatCurrency(result.repaymentAmount)} by{" "}
            {formatDate(result.repaymentDate)}.
          </p>
          <button
            onClick={() => setResult(null)}
            className="text-xs text-gray-500 hover:text-ink"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}

export default RequestLoanPage;
