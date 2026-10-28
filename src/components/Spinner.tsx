import { LordIcon } from "@lordicon/react";
import spinnerIcon from "../../public/gifs/system-outline-4021-spinner-circle-hover-rotation.json";

function Spinner({ label }: { label?: string }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-24 text-gray-500"
    >
      <LordIcon
        icon={spinnerIcon}
        trigger="loop"
        style={{ width: "50px", height: "50px" }}
      />
      <span className="text-sm font-noto font-medium">{label}</span>
    </div>
  );
}

export default Spinner;
