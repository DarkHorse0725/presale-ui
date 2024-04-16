import { BIRDB_ADDRESS, BIRDB_BASE_ADDRESS, BIRDB_BSC_ADDRESS } from "@/lib/consts"
import { Contract } from "ethers"
import birdByteAbi from "@/lib/abi/birdbyte-abi.json"
import { useEthersSigner } from "@/hooks/useEthersSigner"
import { sepolia, useAccount, useChainId } from "wagmi"
import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import { usePhaseCard } from "@/providers/PhaseCardProvder"
import { toast } from "react-toastify"
import { baseSepolia, bscTestnet } from "viem/chains"

const useBuyWithSOL = () => {
  const signer = useEthersSigner()
  const { address } = useAccount()
  const chainId = useChainId()
  const [loading, setLoading] = useState(false)
  const { baseAmount } = usePhaseCard()

  const buyNow = async () => {
    setLoading(true)
    try {
      let response = null
      const { error } = response as any
      if (error) {
        setLoading(false)
        return
      }
      let birdByteAddress = BIRDB_ADDRESS
      if (chainId === sepolia.id) birdByteAddress = BIRDB_ADDRESS
      if (chainId === baseSepolia.id) birdByteAddress = BIRDB_BASE_ADDRESS
      if (chainId === bscTestnet.id) birdByteAddress = BIRDB_BSC_ADDRESS

      const contract = new Contract(birdByteAddress, birdByteAbi, signer)
      const tx = await contract.preSaleMint(address, 1)
      await tx.wait()
      toast.success("Success!")
    } catch (error) {
      handleTxError(error)
    }
    setLoading(false)
  }
  return {
    loading,
    baseAmount,
    buyNow,
  }
}

export default useBuyWithSOL
