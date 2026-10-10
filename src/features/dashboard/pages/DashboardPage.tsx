import StatCards from "../components/StatCards";
import { TransactionsTable } from "../components/TransactionsTable";
import { TrendChart } from "../components/TrendChart";
import { useAccountOverview } from "../hooks/useAccountOverview";

export function DashboardPage() {
  const { data, isLoading, isError } = useAccountOverview();

  if (isLoading)
    return (
      <p className="text-center py-20 text-gray-500">
        Loading your dashboard...
      </p>
    );
  if (isError)
    return (
      <p className="text-center py-20 text-brand">
        Could not load your account
      </p>
    );
  if (!data)
    return (
      <p className="text-center py-20 text-brand">
        Could not load your account.
      </p>
    );
  return (
    <section className="min-h-screen p-6 md:p-10">
      <h1 className="font-heading text-3xl font-bold text-ink">Overview</h1>
      <StatCards overview={data} />
      <TransactionsTable entries={data.recentTransactions} />
      <TrendChart data={data.dailyTrend} />
    </section>
  );
}
