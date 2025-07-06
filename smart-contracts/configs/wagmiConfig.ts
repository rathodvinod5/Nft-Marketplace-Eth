// wagmiConfig.ts
import { sepolia } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID!;
const sepoliaRpcUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL!;

export const { wallets, connectors } = getDefaultWallets({
  appName: "My NFT Marketplace",
  projectId,
});

export const wagmiConfig = createConfig({
  connectors,
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(sepoliaRpcUrl),
  },
  ssr: true,
});
