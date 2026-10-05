import { apiClient } from "../../../api/client";
import type { AccountOverview } from "../../../types/dashboard";

export const dashboard = async (): Promise<AccountOverview> => {
  const response = await apiClient.get<AccountOverview>("/account/overview");
  return response.data;
};
