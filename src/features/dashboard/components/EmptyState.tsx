import { DatabaseX } from "lucide-react";
import type { SeedProfile } from "../../../types/auth";

interface Props {
  onSeed: (profile: SeedProfile) => void;
  isLoading: boolean;
}

export function EmptyState({ onSeed, isLoading }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center py-20 gap-4">
      <DatabaseX size={120} color="#1F395E" strokeWidth={1.25} />
      <p className="font-heading text-lg text-ink">
        No transactional data found
      </p>
      <p className="text-sm text-gray-500 max-w-sm text-center">
        Saver: conservative spending, should qualify for the loan. Spender: high
        spending, should be rejected for the loan.
      </p>
      <div className="flex gap-4 mt-2">
        <button
          onClick={() => onSeed(0)}
          disabled={isLoading}
          className="bg-brand text-white font-semibold text-sm px-6 py-3 rounded-md disabled:opacity-50"
        >
          Seed Data as Saver
        </button>
        <button
          onClick={() => onSeed(1)}
          disabled={isLoading}
          className="bg-brand text-white font-semibold text-sm px-6 py-3 rounded-md disabled:opacity-50"
        >
          Seed Data as Spender
        </button>
      </div>
    </div>
  );
}
