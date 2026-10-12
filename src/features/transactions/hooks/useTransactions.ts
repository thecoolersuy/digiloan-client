import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTransactions, type TransactionQuery } from "../api/api";

export function useTransactions(query: TransactionQuery) {
  return useQuery({
    queryKey: ["transactions", query.page, query.pageSize, query.rangeDays],
    queryFn: () => getTransactions(query),
    placeholderData: keepPreviousData,
  });
}
