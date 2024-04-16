import { Contract } from "ethers"
import birdByteAbi from "@/lib/abi/birdbyte-abi.json"
import { useEthersSigner } from "@/hooks/useEthersSigner"
import { useAccount } from "wagmi"
import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import { usePhaseCard } from "@/providers/PhaseCardProvder"
import { toast } from "react-toastify"
import useSendSOL from "./useSendSOL"
import useBirdByteAddress from "./useBirdByteAddress"

const useBuyWithSOL = () => {
  const signer = useEthersSigner()
  const { address } = useAccount()
  const [loading, setLoading] = useState(false)
  const { baseAmount } = usePhaseCard()
  const { sendSOL } = useSendSOL()
  const birdByteAddress = useBirdByteAddress()

  const buyNow = async () => {
    setLoading(true)
    try {
      const response = await sendSOL(baseAmount)
      const { error } = response as any
      if (error || !birdByteAddress) {
        setLoading(false)
        return
      }
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
