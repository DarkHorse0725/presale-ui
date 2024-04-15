import { BIRDB_ADDRESS, BIRDB_BASE_ADDRESS, BIRDB_BSC_ADDRESS } from "@/lib/consts"
import { Contract } from "ethers"
import birdByteAbi from "@/lib/abi/birdbyte-abi.json"
import { useEthersSigner } from "@/hooks/useEthersSigner"
import { sepolia, useAccount, useChainId } from "wagmi"
import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import { usePhaseCard } from "@/providers/PhaseCardProvder"
import { toast } from "react-toastify"
import useSendEhter from "./useSendEhter"
import useSendUSDTorUSDC from "./useSendUSDTorUSDC"
import useSendSOL from "./useSendSOL"
import { baseSepolia, bscTestnet } from "viem/chains"

const useBuyBIRDB = () => {
  const signer = useEthersSigner()
  const { address } = useAccount()
  const chainId = useChainId()
  const [loading, setLoading] = useState(false)
  const { selectedChain, baseAmount } = usePhaseCard()
  const { sendEther } = useSendEhter()
  const { sendUSDTorUSDC } = useSendUSDTorUSDC()
  const { sendSOL } = useSendSOL()

  const buyNow = async () => {
    setLoading(true)
    try {
      let response = null
      const amount = parseFloat(baseAmount)
      switch (selectedChain.symbol) {
        case "ETH":
          response = await sendEther(amount)
          break
        case "USDT":
        case "USDC":
          response = await sendUSDTorUSDC(amount)
          break
        case "SOL":
          response = await sendSOL(amount)
          break
        default:
          break
      }
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

export default useBuyBIRDB
