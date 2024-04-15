import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { base, baseSepolia, bsc, bscTestnet, mainnet, sepolia } from "@wagmi/core/chains"
import { ToastContainer } from "react-toastify"
import * as React from "react"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { ThemeProvider } from "@/providers/ThemeProvider"

const myChains = process.env.NEXT_PUBLIC_TESTNET
  ? [sepolia, baseSepolia, bscTestnet]
  : [mainnet, base, bsc]
const { chains, publicClient, webSocketPublicClient } = configureChains(myChains as any, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
])

const { wallets } = getDefaultWallets({
  appName: "PRESALE-UI",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  chains,
})

const connectors = connectorsForWallets(wallets)
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <ThemeProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
