import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { SeedProfile } from "../../../types/auth";
import { seedData } from "../api/api";

export function useSeedData() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (profile: SeedProfile) => seedData(profile),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account-overview"] });
    },
  });
}
