import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { AccountOverview } from "../../../types/dashboard";

function formatCurrency(currentBalance: number) {
  return `NPR ${currentBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function StatCards({ overview }: { overview: AccountOverview }) {
  const [showBalance, setShowBalance] = useState(false);

  const disbursementRate =
    overview.totalInflow > 0
      ? ((overview.totalDisbursed / overview.totalInflow) * 100).toFixed(1)
      : "0.0";

  const stats = [
    {
      label: "Total Balance",
      value: showBalance
        ? formatCurrency(overview.currentBalance)
        : "NPR X,XXX.XX",
      toggle: true,
    },
    {
      label: "Inflow",
      value: formatCurrency(overview.totalInflow),
    },
    {
      label: "Outflow",
      value: formatCurrency(overview.totalOutflow),
    },
    {
      label: "Disbursed",
      value: formatCurrency(overview.totalDisbursed),
    },
    {
      label: "Disbursement Rate",
      value: `${disbursementRate}%`,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm flex divide-x divide-gray-100 px-5 py-5">
      {stats.map((stat) => (
        <div key={stat.label} className="flex-1 px-4 flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-sm text-ink">
            {stat.label}
            {stat.toggle && (
              <button
                onClick={() => setShowBalance((show) => !show)}
                className="text-brand hover:text-brand/80"
                aria-label={showBalance ? "Hide balance" : "Show balance"}
              >
                {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            )}
          </div>
          <p className="font-heading font-bold text-lg text-ink">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
