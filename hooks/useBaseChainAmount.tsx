import { useState } from "react"

export const chainsData = [
  { label: "ETH", link: "/images/ETH.svg" },
  { label: "USDT", link: "/images/usdt.svg" },
  { label: "USDC", link: "/images/usdc.svg" },
]

const useBaseChainAmount = () => {
  const [baseAmount, setBaseAmount] = useState(0)
  const [selectedChain, setSelectedChain] = useState(chainsData[0])

  const onChangeBaseAmount = (e) => {
    const temp = parseInt(e.target.value, 10)

    if (Number.isNaN(temp)) {
      setBaseAmount(0)
      return
    }
    setBaseAmount(temp)
  }
  return {
    baseAmount,
    setBaseAmount,
    onChangeBaseAmount,
    selectedChain,
    setSelectedChain,
  }
}

export default useBaseChainAmount
