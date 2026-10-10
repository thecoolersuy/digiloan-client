import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { DailyFlow } from "../../../types/dashboard";

export function TrendChart({ data }: { data: DailyFlow[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-noto font-semibold text-lg text-ink">Trends</h2>
        <div className="flex gap-5 text-sm">
          <span className="flex font-semibold items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border-2 border-[#d64a2e]" />{" "}
            Outflow
          </span>
          <span className="flex font-semibold items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border-2 border-[#5797bc]" />{" "}
            Inflow
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tickFormatter={(d) =>
              new Date(d).toLocaleDateString("en-US", { day: "numeric" })
            }
            tick={{ fontSize: 13, fill: "#8f9298" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            labelFormatter={(d) =>
              new Date(d as string).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
            formatter={(value, name) => [value?.toLocaleString(), name]}
            itemStyle={{ fontWeight: 500 }}
          />
          <Line
            type="monotone"
            dataKey="inflow"
            stroke="#5797bc"
            strokeWidth={2}
            dot={false}
            name="Inflow"
          />
          <Line
            type="monotone"
            dataKey="outflow"
            stroke="#d64a2e"
            strokeWidth={2}
            dot={false}
            name="Outflow"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
