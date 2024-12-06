// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { Sidebar } from '@/components/sidebar';
// import ThemeProvider from '@/components/theme-provider';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Mercado NFT Marketplace',
//   description: 'Your gateway to digital collectibles',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="dark">
//           <div className="flex h-screen bg-background">
//             <Sidebar />
//             <main className="flex-1 overflow-y-auto">
//               {children}
//             </main>
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/sidebar';
import ThemeProvider from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mercado NFT Marketplace',
  description: 'Your gateway to digital collectibles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 ml-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}