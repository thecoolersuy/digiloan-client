import { CircleArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  buttonLabel: string;
  disabled: boolean;
  onClick: () => void;
}

function ActionCard({
  title,
  description,
  buttonLabel,
  disabled,
  onClick,
}: CardProps) {
  return (
    <div className="bg-white rounded-sm w-[266px] min-h-[188px] p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="font-heading font-bold text-xl text-brand">{title}</h3>
          <CircleArrowRight className="size-7 text-brand" strokeWidth={1.5} />
        </div>
        <p className="text-[10px] leading-[14px] font-medium text-ink mt-3">
          {description}
        </p>
      </div>
      <button
        onClick={onClick}
        disabled={disabled}
        className="self-end bg-brand text-white text-[11px] font-semibold rounded-full px-5 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

interface Props {
  disabled: boolean;
  onCheck: () => void;
  onApply: () => void;
}

export function LandingPanel({ disabled, onCheck, onApply }: Props) {
  return (
    <div className="bg-[#fdf4f5] rounded-sm p-10 flex justify-between gap-6">
      <div>
        <h2 className="font-heading font-bold text-[22px] text-brand">
          Applying for a loan ?
        </h2>
        <p className="text-[10px] text-ink mt-3 max-w-md">
          Before filling out a loan application form, please confirm that you
          actually qualify for the specific loan. Thank you!
        </p>
        <div className="flex flex-wrap gap-6 mt-8">
          <ActionCard
            title="Do I qualify ?"
            description="Click here to see how much you can borrow, at what interest, and for how long."
            buttonLabel="Let's start"
            disabled={disabled}
            onClick={onCheck}
          />
          <ActionCard
            title="Full application"
            description="You are committing to fill up a loan application form and take a specific loan that you need to repay within a certain loan tenor."
            buttonLabel="Apply for the loan"
            disabled={disabled}
            onClick={onApply}
          />
        </div>
        {disabled && (
          <p className="text-xs text-brand mt-4">
            You have an active loan, so new applications are paused.
          </p>
        )}
      </div>
      <img
        src="/images/applying.png"
        alt=""
        className="hidden lg:block size-[250px] self-center"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  );
}
