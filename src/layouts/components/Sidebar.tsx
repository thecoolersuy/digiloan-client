import {
  CreditCardReader,
  HandCoins,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { UserMenu } from "./UserMenu";

interface NavigationItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

const navigationItems: NavigationItem[] = [
  { label: "Overview", to: "/dashboard", icon: Gauge },
  { label: "Transactions", to: "/transactions", icon: CreditCardReader },
  { label: "Request Loan", to: "/loans", icon: HandCoins },
];

export function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col bg-white px-6.25 pt-4.25 md:min-h-screen md:w-60 md:px-6.25 lg:w-67.5">
      <div className="flex h-10 items-center justify-center md:justify-start">
        <div className="flex items-center gap-0.5">
          <img
            src="/images/pouch.png"
            alt=""
            aria-hidden="true"
            className="h-9.75 w-7.5 object-contain"
          />
          <span className="font-noto text-[30px] font-bold leading-7.5 tracking-[-0.5px] text-brand">
            digiloan
          </span>
        </div>
      </div>

      <nav aria-label="Main navigation" className="mt-15 pb-6">
        <ul className="flex flex-col gap-1.75">
          {navigationItems.map(({ label, to, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex h-12.75 items-center gap-3.5 rounded-[7px] px-5.25 font-noto text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                    isActive ? "bg-brand text-white" : "text-ink"
                  }`
                }
              >
                <Icon size={21} strokeWidth={2} aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <UserMenu />
      </div>
    </aside>
  );
}
