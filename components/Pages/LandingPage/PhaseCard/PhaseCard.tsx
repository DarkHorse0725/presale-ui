import PhaseContent from "./PhaseContent"
import PhaseFooter from "./PhaseFooter/PhaseFooter"
import PhaseHead from "./PhaseHead/PhaseHead"

const PhaseCard = () => (
  <div className="p-[30px] bg-gray_2 w-full rounded-[10px]">
    <PhaseHead />
    <PhaseContent />
    <PhaseFooter />
  </div>
)

export default PhaseCard
