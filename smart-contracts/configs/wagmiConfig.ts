// import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

// import { http, createConfig } from "wagmi";
// import { hardhat } from "wagmi/chains";
// import { injected } from "wagmi/connectors";

// export const wagmiConfig = createConfig({
//   connectors: [
//     injected(), // MetaMask or local wallet
//   ],
//   chains: [
//     {
//       ...hardhat,
//       rpcUrls: {
//         default: {
//           http: ["http://127.0.0.1:8545"], // <- Anvil RPC
//         },
//       },
//     },
//   ],
//   transports: {
//     [hardhat.id]: http("http://127.0.0.1:8545"),
//   },
// });

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
