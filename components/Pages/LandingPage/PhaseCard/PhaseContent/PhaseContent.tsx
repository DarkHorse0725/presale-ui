import { usePhaseCard } from "@/providers/PhaseCardProvder"
import TargetBar from "./TargetBar"
import Prices from "./Prices"
import BaseChains from "../BaseChains"
import Amount from "../Amount"
import Cost from "../Cost"
import ETHButton from "./ETHButton"
import SOLANAButton from "./SOLANAButton"

const PhaseContent = () => {
  const { selectedChain } = usePhaseCard()
  const shouldBuyOnSolana = selectedChain?.symbol === "SOL"

  return (
    <>
      <TargetBar />
      <Prices />
      <div className="grid grid-cols-2 gap-x-[20px] gap-y-[10px] mt-[10px]">
        <BaseChains />
        <Amount />
        <div className="col-span-2">
          <Cost />
        </div>
      </div>
      {shouldBuyOnSolana ? <SOLANAButton /> : <ETHButton />}
    </>
  )
}

export default PhaseContent
