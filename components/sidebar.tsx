// "use client";

// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { cn } from '@/lib/utils';
// import {
//   Home,
//   ShoppingCart,
//   Wallet,
//   BarChart2,
//   History,
//   Settings,
//   Palette,
//   HelpCircle,
//   LogOut,
//   Grid
// } from 'lucide-react';

// const menuItems = [
//   { icon: Home, label: 'Home', href: '/' },
//   { icon: ShoppingCart, label: 'Market', href: '/market' },
//   { icon: Grid, label: 'Portfolio', href: '/portfolio' },
//   { icon: BarChart2, label: 'Statistics', href: '/statistics' },
//   { icon: Wallet, label: 'Wallet', href: '/wallet' },
//   { icon: History, label: 'History', href: '/history' },
//   { icon: Settings, label: 'Setting', href: '/settings' },
// ];

// const bottomMenuItems = [
//   { icon: Palette, label: 'Themes', href: '/themes' },
//   { icon: HelpCircle, label: 'Support', href: '/support' },
// ];

// export function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const pathname = usePathname();

//   return (
//     <div
//       className={cn(
//         "h-screen bg-card border-r border-border transition-all duration-300 ease-in-out",
//         isExpanded ? "w-64" : "w-16"
//       )}
//       onMouseEnter={() => setIsExpanded(true)}
//       onMouseLeave={() => setIsExpanded(false)}
//     >
//       <div className="p-4">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="text-primary">
//             <Grid size={28} />
//           </div>
//           <span className={cn(
//             "font-semibold text-xl transition-opacity duration-300",
//             isExpanded ? "opacity-100" : "opacity-0 w-0"
//           )}>
//             Mercado
//           </span>
//         </Link>
//       </div>

//       <nav className="flex flex-col justify-between h-[calc(100%-5rem)]">
//         <div className="px-2 py-4">
//           {menuItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={cn(
//                 "flex items-center gap-2 rounded-lg transition-colors",
//                 "hover:bg-accent hover:text-accent-foreground",
//                 pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
//                 isExpanded ? "px-3 py-2 mr-4" : "p-3 mx-auto justify-center"
//               )}
//             >
//               <item.icon size={isExpanded ? 24 : 28} />
//               <span className={cn(
//                 "transition-opacity duration-300",
//                 isExpanded ? "opacity-100" : "opacity-0 w-0 absolute"
//               )}>
//                 {item.label}
//               </span>
//             </Link>
//           ))}
//         </div>

//         <div className="px-2 py-4 mt-auto">
//           {bottomMenuItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={cn(
//                 "flex items-center gap-2 rounded-lg transition-colors",
//                 "hover:bg-accent hover:text-accent-foreground",
//                 pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
//                 isExpanded ? "px-3 py-2 mr-4" : "p-3 mx-auto justify-center"
//               )}
//             >
//               <item.icon size={isExpanded ? 24 : 28} />
//               <span className={cn(
//                 "transition-opacity duration-300",
//                 isExpanded ? "opacity-100" : "opacity-0 w-0 absolute"
//               )}>
//                 {item.label}
//               </span>
//             </Link>
//           ))}

//           <button
//             className={cn(
//               "flex items-center gap-2 rounded-lg transition-colors w-full",
//               "hover:bg-accent hover:text-accent-foreground text-muted-foreground",
//               isExpanded ? "px-3 py-2 mr-4" : "p-3 mx-auto justify-center"
//             )}
//           >
//             <LogOut size={isExpanded ? 24 : 28} />
//             <span className={cn(
//               "transition-opacity duration-300",
//               isExpanded ? "opacity-100" : "opacity-0 w-0 absolute"
//             )}>
//               Logout
//             </span>
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: ShoppingCart, label: "Market", href: "/market" },
  { icon: Grid, label: "Portfolio", href: "/portfolio" },
  { icon: BarChart2, label: "Statistics", href: "/statistics" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: History, label: "History", href: "/history" },
  { icon: Settings, label: "Setting", href: "/settings" },
];

const bottomMenuItems = [
  { icon: Palette, label: "Themes", href: "/themes" },
  { icon: HelpCircle, label: "Support", href: "/support" },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "h-screen bg-card border-r border-border fixed",
        "transition-[width] duration-300 ease-in-out bg-custom-secondaryBackground text-gray-400",
        isExpanded ? "w-64" : "w-16",
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
