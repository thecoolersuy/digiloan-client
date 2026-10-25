import { useMemo, type ReactNode } from "react";
import type { LoanApplicationRequest } from "../../../types/loan";
import { makeLoanFormSchema, type LoanFormValues } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formatMonths } from "../../../lib/format";

interface Props {
  maxAmount: number;
  maxTenor: number;
  isLoading: boolean;
  onSubmit: (request: LoanApplicationRequest) => void;
  onEdit: () => void;
}

const inputClass =
  "w-full h-[48px] border-[2px] border-[#aaa] rounded-sm bg-transparent px-4 text-base text-ink shadow-[0_0_3px_-1px_black] transition-colors duration-200 ease-out motion-reduce:transition-none focus:outline-none focus:border-brand font-noto font-medium text-ink";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative w-full max-w-[90.25]">
      <label className="absolute -top-2.5 left-3 bg-background px-1 text-[12px] font-noto font-medium text-[#aaa]">
        {label}
      </label>
      {children}

      <p className="text-brand text-xs mt-1 min-h-4">{error}</p>
    </div>
  );
}

export function LoanForm({
  maxAmount,
  maxTenor,
  isLoading,
  onSubmit,
  onEdit,
}: Props) {
  const schema = useMemo(
    () => makeLoanFormSchema(maxAmount, maxTenor),
    [maxAmount, maxTenor],
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { requestedAmount: "", requestedLoanTenor: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((values) =>
        onSubmit({
          requestedAmount: Number(values.requestedAmount),
          requestedLoanTenor: Number(values.requestedLoanTenor),
        }),
      )}
      onChange={onEdit}
      className="flex flex-col gap-8"
    >
      <h3 className="font-noto font-bold text-[20px] text-[#1f395e]">
        Customize your loan application
      </h3>

      <Field label="Loan amount" error={errors.requestedAmount?.message}>
        <span className="absolute left-4 top-5.5 -translate-y-1/2 text-sm text-gray-500 font-noto font-medium">
          NPR
        </span>
        <input
          type="number"
          min={1}
          inputMode="decimal"
          className={`${inputClass} pl-14`}
          {...register("requestedAmount")}
        />
      </Field>

      <Field label="Loan tenor" error={errors.requestedLoanTenor?.message}>
        <select className={inputClass} {...register("requestedLoanTenor")}>
          <option value="">Select loan tenor</option>
          {Array.from({ length: maxTenor }, (_, i) => i + 1).map((months) => (
            <option key={months} value={months}>
              {formatMonths(months)}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        disabled={isLoading}
        className="self-start border border-brand text-brand text-[13px] font-noto font-medium rounded-full px-6 py-3 disabled:opacity-50"
      >
        {isLoading ? "Calculating..." : "View Loan Summary"}
      </button>
    </form>
  );
}
