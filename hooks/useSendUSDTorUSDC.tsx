import handleTxError from "@/lib/handleTxError"
import { erc20ABI } from "wagmi"
import { Contract } from "ethers"
import { useEthersSigner } from "./useEthersSigner"
import { BIRDB_ADDRESS } from "@/lib/consts"
import { parseUnits } from "viem"
import { usePhaseCard } from "@/providers/PhaseCardProvder"

const useSendUSDTorUSDC = () => {
  const signer = useEthersSigner()
  const { selectedChain } = usePhaseCard()
  const tokenAddress = selectedChain?.address

  const sendUSDTorUSDC = async (amount) => {
    try {
      const contract = new Contract(tokenAddress, erc20ABI, signer)
      const tx = await contract.transfer(BIRDB_ADDRESS, parseUnits(amount.toString(), 6))
      await tx.wait()
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  return {
    sendUSDTorUSDC,
  }
}

export default useSendUSDTorUSDC
