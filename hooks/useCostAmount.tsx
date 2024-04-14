import { useState } from "react"

const useCostAmount = () => {
  const [costAmount, setCostAmount] = useState(0)

  const onChangeCostAmount = (e) => {
    const amount = e.target.value
    const temp = parseInt(amount, 10)

    if (Number.isNaN(temp)) {
      setCostAmount(0)
      return
    }
    setCostAmount(temp)
  }

  return {
    costAmount,
    setCostAmount,
    onChangeCostAmount,
  }
}

export default useCostAmount
