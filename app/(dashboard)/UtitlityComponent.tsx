'use client';

import { useAccount } from "wagmi";

const ConnectButton = ({
  onClickConnectWallet
}: {
  onClickConnectWallet?: () => void
}) => {
  const { address } = useAccount();

  return(
    <button
        className="px-6 py-2 border border-[#fffff] hover:border-[#3B9DF8] hover:bg-[#3B9DF8] 
        transition duration-300 rounded text-white"
        onClick={onClickConnectWallet}
    >
        {address && address.length ? address : "Connect Wallet"}
    </button>
  );
}

export default ConnectButton;