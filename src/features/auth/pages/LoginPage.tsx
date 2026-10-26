import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormValues } from "../schemas/authSchema";
import { useDemoLogin, useLogin } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info } from "lucide-react";
import bankgif from "../../../../public/gifs/movingbank.gif";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();
  const demoLoginMutation = useDemoLogin();

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-brand">
      <div className="md:w-1/2 flex flex-col items-center justify-center text-white px-8 py-16 gap-6">
        <img src={bankgif} alt="Bank" className="w-50 h-50" />
        <h1 className="font-open font-bold text-3xl md:text-4xl text-center">
          Choose your Account
        </h1>
        <p className="text-center text-lg max-w-md opacity-90 flex items-start gap-2">
          <Info className="text-white shrink-0" size={22} aria-hidden="true" />
          <span>
            You're viewing sample data, no real transactions will be processed
          </span>
        </p>
      </div>
      <div className="md:w-1/2  bg-panel flex flex-col items-center justify-center px-6 py-16">
        <h2 className="font-open text-3xl text-ink mb-8">
          <span className="font-light">Welcome to</span>{" "}
          <span className="font-bold">Your Bank</span>
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full max-w-md rounded-sm shadow-md p-7 flex flex-col gap-2"
        >
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-2 border-gray-400 rounded-sm px-4 py-3 text-sm placeholder:text-gray-400 transition-colors duration-200 ease-out motion-reduce:transition-none focus:outline-none focus:border-brand"
              {...register("email")}
            />
            <p
              className="text-brand font-noto font-medium text-xs mt-1 min-h-4"
              aria-live="polite"
            >
              {errors.email?.message}
            </p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-gray-400 rounded-sm px-4 py-3 text-sm placeholder:text-gray-400 transition-colors duration-200 ease-out motion-reduce:transition-none focus:outline-none focus:border-brand"
              {...register("password")}
            />
            <p
              className="text-brand font-noto font-medium text-xs mt-1 min-h-4"
              aria-live="polite"
            >
              {errors.password?.message}
            </p>
          </div>

          <p className="text-xs text-gray-400  font-inter">
            Don't have an Account?{" "}
            <Link to="/register" className="text-brand font-semibold">
              Tap Here !
            </Link>
          </p>

          <p className="text-brand text-xs font-noto font-medium min-h-4" aria-live="polite">
            {loginMutation.isError ? "Invalid email or password." : ""}
          </p>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="bg-brand text-white font-bold uppercase tracking-wide py-3 rounded-sm hover:opacity-90 disabled:opacity-50 transition"
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </button>

          <div className="relative flex items-center justify-center my-1">
            <div className="border-t border-gray-300 w-full absolute" />
            <span className="bg-white px-3 text-xs text-gray-400 relative">
              or
            </span>
          </div>

          <button
            type="button"
            onClick={() => demoLoginMutation.mutate(0)}
            disabled={demoLoginMutation.isPending}
            className="bg-white text-brand font-semibold text-sm py-2.5 rounded-sm hover:bg-brand/10 transition"
          >
            Open Demo As Saver
          </button>

          <button
            type="button"
            onClick={() => demoLoginMutation.mutate(1)}
            disabled={demoLoginMutation.isPending}
            className="bg-white text-brand font-semibold text-sm py-2.5 rounded-sm hover:bg-brand/10 transition"
          >
            Open Demo As Spender
          </button>
        </form>

        <p className="font-noto text-[#1f395e] font-semibold text-xs text-center max-w-md mt-6 flex gap-2 items-center">
          <Info
            className="text-[#1f395e] shrink-0"
            size={16}
            aria-hidden="true"
          />
          <span>
            Saver: conservative spending, should qualify for the loan.
            <br />
            Spender: high spending, should be rejected for the loan.
          </span>
        </p>
      </div>
    </div>
  );
}
