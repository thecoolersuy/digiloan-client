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
    <div className="bg-white rounded-sm px-4 py-3 flex items-center gap-3 min-w-34.5">
      <Icon className="size-6 text-[#1F395E] shrink-0" strokeWidth={1.5} />
      <div>
        <p className="text-[12px] font-noto font-semibold text-[#1F395E]">{label}</p>
        <p className="text-lg  font-noto font-semibold text-[#1F395E] whitespace-nowrap">
          {value}
        </p>
      </div>
    </div>
  );
}
