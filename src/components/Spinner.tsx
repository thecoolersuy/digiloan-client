import spinnerIcon from "../../public/gifs/system-outline-4021-spinner-circle-loop-spin.gif";

function Spinner({ label }: { label?: string }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-24 text-gray-500"
    >
      <img src={spinnerIcon} alt="Loading" width={50} height={50} />
      <span className="text-sm font-noto font-medium">{label}</span>
    </div>
  );
}

export default Spinner;
