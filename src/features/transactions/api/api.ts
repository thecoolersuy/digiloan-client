import { apiClient } from "../../../api/client";
import type { LedgerEntryDto } from "../../../types/dashboard";
import type { PaginationResult } from "../../../types/pagination";

export interface TransactionQuery {
  page: number;
  pageSize: number;
  rangeDays: number | null;
}

export const getTransactions = async ({
  page,
  pageSize,
  rangeDays,
}: TransactionQuery) => {
  const from = rangeDays
    ? new Date(Date.now() - rangeDays * 24 * 60 * 60 * 1000).toISOString()
    : undefined;
  const to = rangeDays ? new Date(Date.now()).toISOString() : undefined;

  const response = await apiClient.get<PaginationResult<LedgerEntryDto>>(
    "/account/transactions",
    { params: { page, pageSize, from, to } },
  );
  return response.data;
};
