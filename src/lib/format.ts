export function formatCurrency(amount: number): string {
  return `NPR. ${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatMonths(n: number): string {
  return `${n} ${n === 1 ? "month" : "months"}`;
}
