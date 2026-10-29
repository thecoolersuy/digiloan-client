import spinnerIcon from "../../public/gifs/system-solid-4024-spinner-two-circles-loop-oscillate-white.gif";

function Spinner({ label }: { label?: string }) {
  return (
    <div
      role="status"
      className="flex items-center justify-center gap-3 text-gray-500"
    >
      <img src={spinnerIcon} alt="Loading" width={18} height={18} />
      <span className="text-sm font-noto font-medium">{label}</span>
    </div>
  );
}

export default Spinner;
