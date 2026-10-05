import type { TransactionType } from "./ledger";

export interface AccountOverview {
  accountNumber: string;
  currentBalance: number;
  totalInflow: number;
  totalOutflow: number;
  totalDisbursed: number;
  dailyTrend: DailyFlow[];
  recentTransactions: LedgerEntryDto[];
}

export interface LedgerEntryDto {
  displayId: string;
  createdAtUtc: string;
  sourceLabel: string;
  sourceAccountNumber: string;
  destinationLabel: string;
  destinationAccountNumber: string;
  amount: number;
  transactionType: TransactionType;
}

export interface DailyFlow {
  date: string;
  inflow: number;
  outflow: number;
}
