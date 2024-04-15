import { useState } from "react"

export const chainsData = [
  { link: "/images/ETH.svg", symbol: "ETH", address: "" },
  {
    link: "/images/usdt.svg",
    symbol: "USDT",
    address: "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0",
  },
  {
    link: "/images/usdc.svg",
    symbol: "USDC",
    address: "0xf08A50178dfcDe18524640EA6618a1f965821715",
  },
  { link: "/images/Sol.svg", symbol: "SOL" },
]

const useBaseChainAmount = () => {
  const [baseAmount, setBaseAmount] = useState(0)
  const [selectedChain, setSelectedChain] = useState(chainsData[0])

  const onChangeBaseAmount = (e) => {
    setBaseAmount(e.target.value)
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
