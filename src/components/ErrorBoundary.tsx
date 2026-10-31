import { Server } from "lucide-react";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex flex-col items-center gap-3 py-24 text-center"
        >
          <Server size={80} color="#cf2027" strokeWidth={1.5} />
          <h2 className="font-noto text-[30px] font-bold text-ink">
            Something went wrong
          </h2>
          <p className="max-w-sm font-noto text-[14px] text-gray-500">
            This page hit an unexpected problem. Reloading usually fixes it.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 rounded-full bg-brand px-6 py-3 text-[15px] font-semibold text-white"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
