"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDisconnect } from "wagmi";
import { cn } from "@/lib/utils";
import {
  Home,
  ShoppingCart,
  Wallet,
  BarChart2,
  History,
  Settings,
  Palette,
  HelpCircle,
  LogOut,
  Grid,
  CirclePlus,
  Coins,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: CirclePlus, label: "Create", href: "/create" },
  { icon: Grid, label: "Collections", href: "/collections" },
  { icon: Coins, label: "NFT's", href: "/nft" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  // { icon: History, label: "History", href: "/history" },
  { icon: Settings, label: "Setting", href: "/settings" },
];

const bottomMenuItems = [
  { icon: Palette, label: "Themes", href: "/themes" },
  { icon: HelpCircle, label: "Support", href: "/support" },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const { disconnect } = useDisconnect();

  const handleDisconnect = async () => {
    await disconnect();
  };

  return (
    <aside
      className={cn(
        "z-50 h-screen bg-card border-r border-border border-gray-500 border-opacity-60 fixed",
        "transition-[width] duration-300 ease-in-out bg-custom-secondaryBackground text-gray-400",
        isExpanded ? "w-64" : "w-20",
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="pl-6 pt-4 space-y-2">
        <Link href="/" className="flex items-center h-10">
          <div className="text-primary flex items-center justify-center">
            <Grid size={24} />
          </div>
          <span
            className={cn(
              "font-semibold text-xl overflow-hidden transition-all duration-300 ml-4",
              isExpanded ? "w-auto opacity-100" : "w-0 opacity-0",
            )}
          >
            Mercado
          </span>
        </Link>
      </div>

      <nav className="flex flex-col justify-between h-[calc(100%-5rem)]">
        <div className="px-2 py-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center h-10 rounded-lg relative",
                "transition-all duration-300 ease-in-out",
                pathname === item.href
                  ? "bg-accent text-white border-r-2 border-purple-500"
                  : "text-muted-foreground hover:bg-accent hover:text-gray-400",
                isExpanded ? "px-4" : "px-4",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",
                  "transition-all duration-300 ease-in-out",
                  // isExpanded ? "w-8" : "w-16"
                )}
              >
                <item.icon size={24} />
              </div>
              <span
                className={cn(
                  "whitespace-nowrap overflow-hidden transition-all duration-300 ml-4",
                  isExpanded ? "w-auto opacity-100" : "w-0 opacity-0",
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="px-2 py-4 space-y-2">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center h-10 rounded-lg relative",
                "transition-all duration-300 ease-in-out",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground px-4",
                // isExpanded ? "px-4" : "px-0"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center",
                  "transition-all duration-300 ease-in-out",
                  // isExpanded ? "w-8" : "w-16"
                )}
              >
                <item.icon size={24} />
              </div>
              <span
                className={cn(
                  "whitespace-nowrap overflow-hidden transition-all duration-300 ml-4",
                  isExpanded ? "w-auto opacity-100" : "w-0 opacity-0",
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}

          <button
            className={cn(
              "flex items-center h-10 rounded-lg relative w-full",
              "transition-all duration-300 ease-in-out",
              "text-muted-foreground hover:bg-accent hover:text-accent-foreground px-4",
              // isExpanded ? "px-4" : "px-0"
            )}
            onClick={handleDisconnect}
          >
            <div
              className={cn(
                "flex items-center justify-center",
                "transition-all duration-300 ease-in-out",
                // isExpanded ? "w-8" : "w-16"
              )}
            >
              <LogOut size={24} />
            </div>
            <span
              className={cn(
                "whitespace-nowrap overflow-hidden transition-all duration-300 ml-4",
                isExpanded ? "w-auto opacity-100" : "w-0 opacity-0",
              )}
            >
              Logout
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
