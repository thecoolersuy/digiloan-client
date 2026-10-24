interface Props {
  reasons: string[];
  onReturn: () => void;
}

function NotQualifiedPanel({ reasons, onReturn }: Props) {
  return (
    <div className="bg-[#fdf4f5] rounded-sm p-10 flex flex-col gap-4">
      <h2 className="font-heading font-bold text-[22px] text-brand">
        You don't qualify for a loan
      </h2>
      <p className="text-[11px] text-ink max-w-xl">
        Based on your transaction history and credit score, you don't qualify
        for a loan right now.
      </p>

      <h3 className="font-heading font-bold text-[15px] text-[#1f395e] mt-2">
        What is preventing you from taking a loan
      </h3>
      <ul className="flex flex-col gap-2 max-w-xl">
        {(reasons.length > 0
          ? reasons
          : ["Your account does not currently meet the lending criteria."]
        ).map((reason) => (
          <li
            key={reason}
            className="bg-white rounded-sm border-l-4 border-brand px-4 py-3 text-sm text-ink"
          >
            {reason}
          </li>
        ))}
      </ul>

      <button
        onClick={onReturn}
        className="self-start border border-brand text-brand text-[11px] font-semibold rounded-full px-6 py-3 mt-2"
      >
        Return to the dashboard
      </button>
    </div>
  );
}

export default NotQualifiedPanel;
