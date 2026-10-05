import { useQuery } from "@tanstack/react-query";
import { dashboard } from "../apis/api";

export function useAccountOverview() {
  return useQuery({
    queryKey: ["account-overview"],
    queryFn: dashboard,
  });
}
