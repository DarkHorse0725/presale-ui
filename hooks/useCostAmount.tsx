import { useEthPrice } from "@/providers/EthPriceProvider"
import { useMemo, useState } from "react"

const useCostAmount = (baseAmount) => {
  const { ethPrice } = useEthPrice()

  const costAmount = useMemo(()=>{
    return baseAmount * ethPrice / 0.01
  }, [baseAmount, ethPrice])

  return {
    costAmount,
  }
}

export default useCostAmount
