export interface LoanApplicationRequest {
  requestedAmount: number;
  requestedLoanTenor: number;
}

export interface EligibilityResult {
  isEligible: boolean;
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

export interface LoanQuoteResult {
  requestedAmount: number;
  tenorMonths: number;
  interestPercentage: number;
  interestAmount: number;
  repaymentAmount: number;
  repaymentDate: string;
}

export interface LoanApplication {
  id: string;
  createdAtUtc: string;
  requestedAmount: number;
  interestRate: number;
  loanTenor: number;
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
