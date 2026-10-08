import { apiClient } from "../../../api/client";
import type { SeedProfile } from "../../../types/auth";

export const seedData = async (
  profile: SeedProfile,
): Promise<{ message: string }> => {
  const response = await apiClient.post(`/dev/seed-data?profile=${profile}`);
  return response.data;
};
