import { useChainId } from "wagmi"
import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import { usePhaseCard } from "@/providers/PhaseCardProvder"
import { toast } from "react-toastify"
import useSendSOL from "./useSendSOL"
import buyBIRDB from "@/lib/buyBIRDB"

const useBuyWithSOL = () => {
  const [loading, setLoading] = useState(false)
  const { baseAmount, evmAddress } = usePhaseCard()
  const { sendSOL } = useSendSOL()
  const { costAmount } = usePhaseCard()
  const chainId = useChainId()

  const buyNow = async () => {
    setLoading(true)
    try {
      const depositResponse = await sendSOL(baseAmount)
      const { error } = depositResponse as any
      if (error) {
        setLoading(false)
        return
      }
      const response = await buyBIRDB(evmAddress, costAmount, chainId)
      setLoading(false)
      toast.success("Success!")
      return response
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
