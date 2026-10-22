import { type LucideIcon } from "lucide-react";

export function StatTile({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-sm px-4 py-3 flex items-center gap-3 min-w-37.5">
      <Icon className="size-6 text-[#1f395e] shrink-0" strokeWidth={1.5} />
      <div>
        <p className="text-[10px] font-semibold text-[#1f39fe]">{label}</p>
        <p className="text-lg font-semibold text-[#1f39fe] whitespace-nowrap">
          {value}
        </p>
      </div>
    </div>
  );
}
