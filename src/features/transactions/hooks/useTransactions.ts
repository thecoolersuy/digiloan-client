import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTransactions, type TransactionQuery } from "../api/api";
import { queryKeys } from "../../../api/queryKeys";

export function useTransactions(query: TransactionQuery) {
  return useQuery({
    queryKey: [
      queryKeys.transactions,
      query.page,
      query.pageSize,
      query.rangeDays,
    ],
    queryFn: () => getTransactions(query),
    placeholderData: keepPreviousData,
  });
}
