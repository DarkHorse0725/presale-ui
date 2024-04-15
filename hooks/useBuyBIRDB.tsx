import { BIRDB_ADDRESS } from "@/lib/consts"
import { Contract } from "ethers"
import birdByteAbi from "@/lib/abi/birdbyte-abi.json"
import { useEthersSigner } from "@/hooks/useEthersSigner"
import { useAccount } from "wagmi"
import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import { usePhaseCard } from "@/providers/PhaseCardProvder"

const useBuyBIRDB = () => {
  const signer = useEthersSigner()
  const { address } = useAccount()
  const [loading, setLoading] = useState(false)
  const { baseAmount } = usePhaseCard()

  const buyNow = async () => {
    setLoading(true)
    try {
      const contract = new Contract(BIRDB_ADDRESS, birdByteAbi, signer)
      const tx = await contract.preSaleMint(address, baseAmount)
      await tx.wait()
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
