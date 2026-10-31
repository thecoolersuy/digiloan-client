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
import { queryKeys } from "../../../api/queryKeys";
import { LoanApplicationsTable } from "../components/LoanApplicationsTable";
import { LandingPanel } from "../components/LandingPanel";
import { LoanSummary } from "../components/LoanSummary";
import { getErrorMessage } from "../../../api/errors";
import { LoanForm } from "../components/LoanForm";
import { QualifiedPanel } from "../components/QualifiedPanel";
import NotQualifiedPanel from "../components/NotQualifiedPanel";
import { ArrowRight, Eye, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Step = "landing" | "check" | "apply" | "disbursed";
export function RequestLoanPage() {
  const queryClient = useQueryClient();
  const [step, setStep] = useState<Step>("landing");
  const [result, setResult] = useState<LoanApplicationResult | null>(null);

  const applications = useLoanApplication();
  const eligibility = useEligibility();
  const quote = useLoanQuote();
  const disburse = useDisbuseLoan();
  const eligibilityData = eligibility.data;

  const clearLoanState = () => {
    quote.reset();
    disburse.reset();

    queryClient.removeQueries({
      queryKey: queryKeys.eligibility,
    });
  };

  const navigate = useNavigate();

  const reset = () => {
    clearLoanState();
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
          clearLoanState();
          setStep("disbursed");
        },
      },
    );
  };
  return (
    <section className="min-h-screen p-6 md:p-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-noto font-bold text-2xl text-ink">
            Request Loan
          </h1>
          <p className="text-sm text-[#8d9199]">
            Fill out the loan application to get the loan.{" "}
            <span className="text-[#2859a8] font-semibold">
              (Sample data seeded for testing)
            </span>
          </p>
        </div>
        {step === "disbursed" && result && (
          <>
            <div className="bg-[#f4fdf3] rounded-sm p-10 flex">
              <div>
                <h2 className="font-heading font-bold text-[22px] text-[#29a221]">
                  Your application is successfully submitted!
                </h2>
                <p className="text-[13px] font-noto font-medium text-ink mt-3 max-w-xl">
                  Well done! You have successfully filled up a loan application.
                  Your loan amount will be transferred to your account briefly.
                  Enjoy your loan.
                </p>

                <h3 className="font-noto font-bold text-[17px] text-[#1f395e] mt-6 mb-3">
                  Application Id: {result.loanApplicationId}
                </h3>
                <p className="font-noto font-semibold text-[#1f395e] flex gap-2 items-center">
                  <Info size={20} />
                  Worth Checking
                </p>
                <p className="flex flex-col text-[14px] pl-7 pt-2">
                  <li className="font-noto font-semibold text-[#1f395e]">
                    Your updated balance
                  </li>
                  <li className="font-noto font-semibold text-[#1f395e]">
                    Loan Application
                  </li>
                </p>
              </div>
              <img
                src="/images/id.png"
                alt=""
                className="hidden lg:block w-75 h-50 object-contain scale-160 "
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-brand text-white text-[13px] font-medium font-noto rounded-full px-6 py-3 flex items-center gap-2"
              >
                Return to the dashboard <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => navigate("/transactions")}
                className="border border-brand text-brand text-[13px] font-medium font-noto rounded-full px-6 py-3 flex items-center gap-2"
              >
                Check my loan application <Eye className="size-4" />
              </button>
            </div>
          </>
        )}
        {step === "landing" && (
          <>
            <LandingPanel
              onCheck={() => setStep("check")}
              onApply={() => setStep("apply")}
            />

            {applications.isError && (
              <p className="text-sm text-red-600 font-noto font-medium">
                Unable to load your loan applications.
              </p>
            )}

            {!applications.isLoading &&
              !applications.isError &&
              (applications.data?.length ?? 0) > 0 && (
                <section className="flex flex-col gap-2">
                  <h2 className="font-heading font-bold text-xl text-ink">
                    Ongoing Loan Applications
                  </h2>

                  <LoanApplicationsTable items={applications.data!} />
                </section>
              )}
          </>
        )}
        {step !== "landing" && step !== "disbursed" && (
          <>
            {eligibility.isLoading && (
              <p className="text-center py-16 text-gray-500">
                Checking your eligibility...
              </p>
            )}

            {eligibility.isError && (
              <div className="flex flex-col items-start gap-3">
                <p className="text-brand text-sm font-noto font-medium">
                  {getErrorMessage(eligibility.error)}
                </p>
                <button
                  onClick={reset}
                  className="border border-brand text-brand text-[11px] font-semibold rounded-full px-6 py-3"
                >
                  Back
                </button>
              </div>
            )}

            {eligibilityData && !eligibilityData.isEligible && (
              <NotQualifiedPanel
                reasons={eligibilityData.reasons}
                onReturn={reset}
              />
            )}

            {eligibilityData?.isEligible && (
              <>
                <QualifiedPanel
                  eligibility={eligibilityData}
                  showActions={step === "check"}
                  onApply={() => setStep("apply")}
                  onCancel={reset}
                />

                {step === "apply" && (
                  <>
                    <LoanForm
                      maxAmount={eligibilityData.maxApprovedAmount}
                      maxTenor={eligibilityData.maxLoanTenor}
                      isLoading={quote.isPending}
                      onSubmit={(request) => quote.mutate(request)}
                      onEdit={() => quote.reset()}
                    />

                    <p
                      className="text-brand text-sm min-h-5 font-noto font-semibold flex gap-2 items-center"
                      aria-live="polite"
                    >
                      {quote.isError ? (
                        <>
                          <Info size={25} />
                          {getErrorMessage(quote.error)}
                        </>
                      ) : (
                        ""
                      )}
                    </p>

                    {quote.data && (
                      <LoanSummary
                        quote={quote.data}
                        isApplying={disburse.isPending}
                        error={
                          disburse.isError
                            ? getErrorMessage(disburse.error)
                            : null
                        }
                        onProceed={() => handleProceed(quote.data)}
                        onCancel={reset}
                      />
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
