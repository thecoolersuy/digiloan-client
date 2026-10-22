import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { invalidateQuery } from "../../../api/invalidate";

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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      request: LoanApplicationRequest,
    ): Promise<LoanApplicationResult> => disburseLoan(request),
    onSuccess: () => invalidateQuery(queryClient),
  });
}
