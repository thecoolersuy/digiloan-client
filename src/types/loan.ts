export interface LoanApplicationRequest {
  requestedAmount: number;
  requestedLoanTenor: number;
}

export interface EligibilityResult {
  isElligible: boolean;
  creditScore: number;
  maxApprovedAmount: number;
  averageDailyBalance: number;
  hasSalaryHistory: boolean;
  reasons: string[];
  maxLoanTenor: number;
  interestRate: number;
}

export interface LoanApplicationResult {
  loanApplicationId: string;
  disbursedAmount: number;
  newBalance: number;
  disbursedAtUtc: string;
  repaymentAmount: number;
  repaymentDate: string;
  status: LoanStatus;
}

export type LoanStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Disbursed"
  | "Overdue";
