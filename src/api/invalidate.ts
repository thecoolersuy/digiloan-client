import type { QueryClient } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";

export function invalidateQuery(queryClient: QueryClient) {
  queryClient.invalidateQueries({ queryKey: queryKeys.accountOverview });
  queryClient.invalidateQueries({ queryKey: queryKeys.transactions });
  queryClient.invalidateQueries({ queryKey: queryKeys.loanApplications });
  queryClient.removeQueries({ queryKey: queryKeys.eligibility });
}
