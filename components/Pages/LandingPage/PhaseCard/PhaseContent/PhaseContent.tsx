import TargetBar from "./TargetBar"
import Prices from "./Prices"
import BaseChains from "../BaseChains"
import Amount from "../Amount"
import Cost from "../Cost"
import ConnectButton from "../ConnectButton"

const PhaseContent = () => (
  <div className="">
    <TargetBar />
    <Prices />
    <div className="grid grid-cols-2 gap-x-[20px] gap-y-[10px] mt-[10px]">
      <BaseChains />
      <Amount />
      <div className="col-span-2">
        <Cost />
      </div>
    </div>
    <ConnectButton />
  </div>
)

export default PhaseContent
