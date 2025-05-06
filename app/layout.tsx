import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/ui/Footer/Footer";
import WalletProviderContext from "./wagmi/walletcontext";
import { NFTProvider } from "@/context/factorycontext";
// import { WagmiConfigProviders } from "@/context/wagmiConfigContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado NFT Marketplace",
  description: "Your gateway to digital collectibles",
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
          <WalletProviderContext>
            {/* <WagmiConfigProviders> */}
            <NFTProvider>
              <div className="flex min-h-screen bg-background">
                <Sidebar />
                <main className="flex-1 pl-[80px] bg-background">
                  {children}
                  <Footer />
                </main>
              </div>
            </NFTProvider>
            {/* </WagmiConfigProviders> */}
          </WalletProviderContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
