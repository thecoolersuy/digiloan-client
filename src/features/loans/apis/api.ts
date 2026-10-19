import { apiClient } from "../../../api/client";
import type {
  EligibilityResult,
  LoanApplication,
  LoanApplicationRequest,
  LoanApplicationResult,
  LoanQuoteResult,
} from "../../../types/loan";

export const getEligibilityScore = async (): Promise<EligibilityResult> => {
  const response = await apiClient.get<EligibilityResult>(
    "/api/credit-scoring",
  );
  return response.data;
};

export const getLoanQuote = async (
  request: LoanApplicationRequest,
): Promise<LoanQuoteResult> => {
  const response = await apiClient.post<LoanQuoteResult>(
    "/disburse/quote",
    request,
  );
  return response.data;
};

export const getLoanApplications = async (): Promise<LoanApplication[]> => {
  const response = await apiClient.get<LoanApplication[]>(
    "/disburse/applications",
  );
  return response.data;
};

export const disburseLoan = async (
  request: LoanApplicationRequest,
): Promise<LoanApplicationResult> => {
  const response = await apiClient.post<LoanApplicationResult>(
    "/disburse/disburse",
    request,
  );

  return response.data;
};
