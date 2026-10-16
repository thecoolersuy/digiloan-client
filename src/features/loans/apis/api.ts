import { apiClient } from "../../../api/client";
import type {
  LoanApplicationDto,
  LoanApplicationRequest,
  LoanApplicationResult,
  LoanQuoteResult,
} from "../../../types/loan";

export const getQuote = async (
  request: LoanApplicationRequest,
): Promise<LoanQuoteResult> => {
  const response = await apiClient.post<LoanQuoteResult>(
    "/disburse/quote",
    request,
  );
  return response.data;
};

export const getLoanApplications = async (): Promise<LoanApplicationDto[]> => {
  const response = await apiClient.get<LoanApplicationDto[]>(
    "/disburse/applications",
  );
  return response.data;
};

export const disburse = async (
  request: LoanApplicationRequest,
): Promise<LoanApplicationResult> => {
  const response = await apiClient.post<LoanApplicationResult>(
    "/disburse/disburse",
    request,
  );

  return response.data;
};
