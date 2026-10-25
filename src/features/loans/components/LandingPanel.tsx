import { CircleArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
}

function ActionCard({ title, description, buttonLabel, onClick }: CardProps) {
  return (
    <div className="bg-white rounded-sm w-85 min-h-48 p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="font-noto font-bold text-xl text-brand">{title}</h3>
          <CircleArrowRight className="size-8 text-brand" strokeWidth={1.5} />
        </div>
        <p className="text-[13px] font-noto leading-3.5 font-medium text-ink mt-3">
          {description}
        </p>
      </div>
      <button
        onClick={onClick}
        className="self-end bg-brand font-noto text-white text-[13px] font-semibold rounded-full px-5 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

interface Props {
  onCheck: () => void;
  onApply: () => void;
}

export function LandingPanel({ onCheck, onApply }: Props) {
  return (
    <div className="bg-[#fdf4f5] rounded-sm p-10 flex justify-between gap-6">
      <div>
        <h2 className="font-noto font-bold text-[24px] text-brand">
          Applying for a loan ?
        </h2>
        <p className="text-[14px] font-noto font-medium text-ink mt-3 max-w-md">
          Before filling out a loan application form, please confirm that you
          actually qualify for the specific loan. Thank you!
        </p>
        <div className="flex flex-wrap gap-6 mt-8">
          <ActionCard
            title="Do I qualify ?"
            description="Click here to see how much you can borrow, at what interest, and for how long."
            buttonLabel="Let's start"
            onClick={onCheck}
          />
          <ActionCard
            title="Full application"
            description="You are committing to fill up a loan application form and take a specific loan that you need to repay within a certain loan tenor."
            buttonLabel="Apply for the loan"
            onClick={onApply}
          />
        </div>
      </div>
      <img
        src="/images/applying.png"
        alt=""
        className="hidden lg:block w-75 h-70 object-contain scale-110 pr-10 pt-10"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  );
}
