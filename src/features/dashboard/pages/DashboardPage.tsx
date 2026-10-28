import { Link } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import StatCards from "../components/StatCards";
import { TransactionsTable } from "../../transactions/components/TransactionsTable";
import { TrendChart } from "../components/TrendChart";
import { useAccountOverview } from "../hooks/useAccountOverview";
import { useSeedData } from "../../seed/hooks/useSeedData";
import { useAuthStore } from "../../../stores/authStore";
import { ArrowRight, Play } from "lucide-react";

export function DashboardPage() {
  const { data: overview, isLoading, isError } = useAccountOverview();
  const seedMutation = useSeedData();
  const fullName = useAuthStore((s) => s.fullName);

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
  if (!overview)
    return (
      <p className="text-center py-20 text-brand">
        Could not load your account.
      </p>
    );

  const hasData = overview.recentTransactions.length > 0;
  return (
    <section className="min-h-screen p-6 md:p-10">
      <h1 className="font-noto text-2xl font-bold text-ink">
        Fintech Dashboard
      </h1>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm text-gray-500">
            Welcome back, {fullName}! Here's what's happening with your ledger
            today.{" "}
            <span className="text-[#2859a8] font-semibold">
              (Sample data seeded for testing)
            </span>
          </p>
        </div>

        {hasData ? (
          <>
            <StatCards overview={overview} />
            <TrendChart data={overview.dailyTrend} />

            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-xl text-ink">
                Latest Transactions
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={() => seedMutation.mutate(0)}
                  disabled={seedMutation.isPending}
                  className="bg-[#002775] text-white text-sm font-semibold px-4 py-2.5 rounded disabled:opacity-50 flex gap-2"
                >
                  <Play size={20} color="#ffffff" strokeWidth={1.25} />
                  Seed as Saver
                </button>
                <button
                  onClick={() => seedMutation.mutate(1)}
                  disabled={seedMutation.isPending}
                  className="bg-[#002775] text-white text-sm font-semibold px-4 py-2.5 rounded disabled:opacity-50 flex gap-2"
                >
                  <Play size={20} color="#ffffff" strokeWidth={1.25} />
                  Seed as Spender
                </button>
              </div>
            </div>

            <TransactionsTable entries={overview.recentTransactions} />

            <div className="flex justify-center">
              <Link
                to="/transactions"
                className="bg-brand text-white font-semibold text-sm px-6 py-2.5 rounded-full flex gap-2 items-center"
              >
                View More <ArrowRight className="size-5" />
              </Link>
            </div>
          </>
        ) : (
          <EmptyState
            onSeed={(profile) => seedMutation.mutate(profile)}
            isLoading={seedMutation.isPending}
          />
        )}
      </div>
    </section>
  );
}
