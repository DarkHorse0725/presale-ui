import Logo from "../Logo"
import CTAList from "./CTAList"
import GetHelp from "./GetHelp"

const CTASection = () => (
  <div className="flex justify-between items-center gap-[30px] bg-gray_2 rounded-[300px] px-[15px] py-[10px]">
    <Logo />
    <CTAList />
    <GetHelp />
  </div>
)

export default CTASection
