import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  LoanApplicationRequest,
  LoanApplicationResult,
} from "../../../types/loan";
import {
  disburseLoan,
  getEligibilityScore,
  getLoanApplications,
  getLoanQuote,
} from "../apis/api";
import { queryKeys } from "../../../api/queryKeys";

export function useLoanQuote() {
  return useMutation({
    mutationFn: (request: LoanApplicationRequest) => getLoanQuote(request),
  });
}

export function useEligibility() {
  return useQuery({
    queryKey: queryKeys.eligibility,
    queryFn: getEligibilityScore,
  });
}

export function useLoanApplication() {
  return useQuery({
    queryKey: queryKeys.loanApplications,
    queryFn: getLoanApplications,
  });
}

export function useDisbuseLoan() {
  return useMutation({
    mutationFn: (
      request: LoanApplicationRequest,
    ): Promise<LoanApplicationResult> => disburseLoan(request),
  });
}
