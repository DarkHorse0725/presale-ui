import { mainnet, sepolia } from "wagmi"

export const SEO_TITLE = "birdbyte"
export const SEO_DESCRIPTION = "birdbyte UI"
export const SEO_IMAGE = "/SEO_LOGO_ICON.png"
export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : mainnet
export const CHAIN_ID = CHAIN.id
export const BIRDB_ADDRESS = process.env.NEXT_PUBLIC_BIRDB_ADDRESS
