import { Ghost } from "lucide-react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <Ghost size={80} strokeWidth={1.5} color={"#cf2027"} />
      <p className="font-noto text-6xl font-bold text-brand">404</p>
      <h1 className="font-noto text-xl font-bold text-ink">Page not found</h1>
      <p className="max-w-sm font-noto text-[15px] text-gray-500">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/dashboard"
        className="mt-2 rounded-full font-noto bg-brand px-6 py-3 text-[15px] font-semibold text-white"
      >
        Return?
      </Link>
    </div>
  );
}

export default NotFoundPage;
