import { useEthPrice } from "@/providers/EthPriceProvider"
import { useMemo, useState } from "react"

const useCostAmount = (baseAmount) => {
  const { coinPrice } = useEthPrice()
  console.log("ziad", coinPrice)
  
  const costAmount = useMemo(()=>{
    return baseAmount * coinPrice / 0.01
  }, [baseAmount, coinPrice])

  return {
    costAmount,
  }
}

export default useCostAmount
