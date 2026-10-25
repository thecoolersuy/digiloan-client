interface Props {
  reasons: string[];
  onReturn: () => void;
}

function NotQualifiedPanel({ reasons, onReturn }: Props) {
  return (
    <>
      <div className="bg-[#fdf4f5] rounded-sm p-10 flex flex-col gap-4">
        <h2 className="font-noto font-bold text-[24px] text-brand">
          You don't qualify for a loan
        </h2>
        <p className="text-[14px] font-noto font-medium text-ink max-w-xl">
          Based on your transaction history and credit score, you don’t qualify
          for a loan. Feel free to proceed to cancel the application and check
          for the reasons you are not qualified for.
        </p>

        <h3 className="font-noto font-bold text-[16px] text-[#1F395E] mt-2">
          What is preventing you from taking a loan
        </h3>
        <ul className="flex flex-col gap-2 max-w-160">
          {(reasons.length > 0
            ? reasons
            : ["Your account does not currently meet the lending criteria."]
          ).map((reason) => (
            <li
              key={reason}
              className="bg-white rounded-sm border-2 border-brand font-semibold px-4 py-3 text-[13px] font-noto text-[#1F395E]"
            >
              {reason}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onReturn}
        className="self-start border border-brand text-brand text-[13px] font-medium font-noto rounded-full px-6 py-3 mt-2"
      >
        Return to the dashboard
      </button>
    </>
  );
}

export default NotQualifiedPanel;
