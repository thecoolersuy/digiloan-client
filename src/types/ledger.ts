export interface LedgerEntry {
  id: string;
  sourceAccountId: string;
  destinationAccountId: string;
  amount: number;
  transactionType: TransactionType;
  createdAtUtc: string;
}


export type TransactionType =
  | "OpeningBalance"
  | "SalaryCredit"
  | "QrPayment"
  | "UtilityBill"
  | "LoanDisbursementService"
  | "LoanRepayment";
