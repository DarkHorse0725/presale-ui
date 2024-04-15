import { BIRDB_ADDRESS } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { sendTransaction } from "@wagmi/core"
import { parseEther } from "viem"

const useSendEhter = () => {
  const sendEther = async (amount) => {
    try {
      const tx = await sendTransaction({
        to: BIRDB_ADDRESS,
        value: parseEther(amount.toString()),
      })

      return tx
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  return {
    sendEther,
  }
}

export default useSendEhter
