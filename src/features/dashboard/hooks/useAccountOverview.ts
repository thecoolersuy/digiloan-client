import { useQuery } from "@tanstack/react-query";
import { dashboard } from "../apis/api";
import { queryKeys } from "../../../api/queryKeys";

export function useAccountOverview() {
  return useQuery({
    queryKey: queryKeys.accountOverview,
    queryFn: dashboard,
  });
}
