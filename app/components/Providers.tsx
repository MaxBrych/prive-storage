"use client";

import {
  ConnectWallet,
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  lightTheme,
  localWallet,
  metamaskWallet,
  smartWallet,
  walletConnect,
} from "@thirdweb-dev/react";

const smartWalletOptions = {
  factoryAddress: "0x02a239e59ae1ef8eade985776f291cdef2f172c7",
  gasless: true,
};

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <>
      <ThirdwebProvider
        activeChain="polygon"
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!}
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          coinbaseWallet({ recommended: true }),
          walletConnect(),
          localWallet(),
        ]}
      >
        {children}
      </ThirdwebProvider>
    </>
  );
}
