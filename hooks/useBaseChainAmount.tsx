import { useState } from "react"

const useBaseChainAmount = () => {
  const chainsData = [
    { label: "ETH", link: "/images/ETH.svg" },
    { label: "USDT", link: "/images/usdt.svg" },
    { label: "USDC", link: "/images/usdc.svg" },
  ]
  const [amount, setAmount] = useState(0)
  const [selectedChain, setSelectedChain] = useState(chainsData[0])
  const [chains, setChains] = useState(chainsData)

  const onChangeAmount = (e) => {
    const temp = parseInt(e.target.value, 10)

    if (Number.isNaN(temp)) {
      setAmount(0)
      return
    }
    setAmount(temp)
  }
  return {
    amount,
    setAmount,
    onChangeAmount,
    selectedChain,
    setSelectedChain,
    chains,
  }
}

export default useBaseChainAmount
