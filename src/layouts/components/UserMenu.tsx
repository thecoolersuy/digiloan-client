import { LogOut, UserRound } from "lucide-react";
import { useAuthStore } from "../../stores/authStore";
import { useLogout } from "../../features/auth/hooks/useAuth";


export function UserMenu() {
  const fullName = useAuthStore((s) => s.fullName);
  const email = useAuthStore((s) => s.email);
  const logout = useLogout();

  const displayName =
    fullName
      ?.trim()
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
      .join(" ") ||
    email ||
    "Account";

  return (
    <div className=" pt-4 pb-8 pl-5">
      <div className="flex items-center gap-3">
        <UserRound color="#cf2027"/>
        <div className="min-w-0">
          <p className="truncate font-noto text-[16px] font-bold text-ink">
            {displayName}
          </p>
          {fullName && email && (
            <p className="truncate font-noto text-[14px] text-gray-500">
              {email}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={logout}
        className="mt-3 flex font-noto w-full items-center gap-2 rounded-md px-3 py-3 text-[15px] font-semibold text-gray-600 hover:bg-gray-100"
      >
        <LogOut className="size-6" /> Logout
      </button>
    </div>
  );
}
