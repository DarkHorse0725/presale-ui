import { BIRDB_ADDRESS, BIRDB_BASE_ADDRESS, BIRDB_BSC_ADDRESS } from "@/lib/consts"
import { useMemo } from "react"
import { baseSepolia, bscTestnet } from "viem/chains"
import { sepolia, useChainId } from "wagmi"

const useBirdByteAddress = () => {
  const chainId = useChainId()
  const birdByteAddress = useMemo(() => {
    if (chainId === sepolia.id) return BIRDB_ADDRESS
    if (chainId === baseSepolia.id) return BIRDB_BASE_ADDRESS
    if (chainId === bscTestnet.id) return BIRDB_BSC_ADDRESS
    return null
  }, [chainId])

  return birdByteAddress
}

export default useBirdByteAddress
