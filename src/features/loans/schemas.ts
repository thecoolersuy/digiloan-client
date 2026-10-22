import z from "zod";
import { formatCurrency, formatMonths } from "../../lib/format";

export interface LoanFormValues {
  requestedAmount: string;
  requestedLoanTenor: string;
}

export function makeLoanFormSchema(maxAmount: number, maxTenor: number) {
  return z.object({
    requestedAmount: z
      .string()
      .min(1, "Enter a loan amount")
      .refine((v) => Number(v) > 0, "Amount must be greater than zero")
      .refine(
        (v) => Number(v) <= maxAmount,
        `Amount cant exceed ${formatCurrency(maxAmount)}`,
      ),
    requestedLoanTenor: z
      .string()
      .min(1, "Selct a loan tenor")
      .refine(
        (v) => Number(v) <= maxTenor,
        `Tenor can't exceed ${formatMonths(maxTenor)}`,
      ),
  });
}
