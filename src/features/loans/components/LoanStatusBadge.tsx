import type { LoanStatus } from "../../../types/loan";

const styles: Record<LoanStatus, string> = {
  Disbursed: "bg-[#e0f4eb] text-[#198d67]",
  Overdue: "bg-[#fde8e8] text-[#cf2027]",
  Pending: "bg-[#f5edcf] text-[#a78a26]",
  Approved: "bg-[#e6efff] text-[#2859a8]",
  Rejected: "bg-[#eceef1] text-[#7f838c]",
};

export function LoanStatusBadge({ status }: { status: LoanStatus }) {
  return (
    <span
      className={`rounded-lg px-3 py-2 text-[12px] font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
