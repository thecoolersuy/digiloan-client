import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-center">
      <p className="font-heading text-6xl font-bold text-brand">404</p>
      <h1 className="font-heading text-xl font-bold text-ink">
        Page not found
      </h1>
      <p className="max-w-sm text-sm text-gray-500">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/dashboard"
        className="mt-2 rounded-full bg-brand px-6 py-3 text-[11px] font-semibold text-white"
      >
        Back to Overview
      </Link>
    </div>
  );
}

export default NotFoundPage;
