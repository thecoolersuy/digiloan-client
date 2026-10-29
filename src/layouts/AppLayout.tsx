import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import ErrorBoundary from "../components/ErrorBoundary";
import { Suspense } from "react";
import Spinner from "../components/Spinner";

export function AppLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <ErrorBoundary key={pathname}>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}
