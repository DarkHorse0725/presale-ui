import useBaseChainAmount from "@/hooks/useBaseChainAmount"
import useCostAmount from "@/hooks/useCostAmount"
import { createContext, useMemo, useContext } from "react"


const PhaseCardContext = createContext(null)

const PhaseCardProvider = ({ children }) => {
  const baseChainData = useBaseChainAmount()
  const costData = useCostAmount(baseChainData.baseAmount)

  const value = useMemo(
    () => ({
      ...baseChainData,
      ...costData,
    }),
    [baseChainData, costData],
  )

  return <PhaseCardContext.Provider value={value}>{children}</PhaseCardContext.Provider>
}

export const usePhaseCard = () => {
  const context = useContext(PhaseCardContext)
  if (!context) {
    throw new Error("usePhaseCard must be used within a PhaseCardProvider")
  }
  return context
}

export default PhaseCardProvider
