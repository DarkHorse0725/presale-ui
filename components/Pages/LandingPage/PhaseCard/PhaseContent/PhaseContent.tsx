import TargetBar from "./TargetBar"
import Prices from "./Prices"
import BaseChains from "../BaseChains"
import Amount from "../Amount"
import Cost from "../Cost"

const PhaseContent = () => (
  <div className="">
    <TargetBar />
    <Prices />
    <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
      <BaseChains />
      <Amount />
      <div className="col-span-2">
        <Cost />
      </div>
    </div>
  </div>
)

export default PhaseContent
