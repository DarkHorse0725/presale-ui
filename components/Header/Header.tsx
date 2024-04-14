import { ConnectButton } from "@rainbow-me/rainbowkit"
import CTASection from "./CTASection"
import ChainNetwork from "./ChainNetwork"
import Container from "../Container"

const Header = () => (
  <Container
    contentClassName="w-full flex justify-between py-[15px] px-[10px]"
    containerClassName="flex items-center justify-between"
  >
    <CTASection />
    {/* <ChainNetwork /> */}
    <div className="flex items-center justify-center px-[10px] py-[10px] bg-gray_2 rounded-[20px]">
      <ConnectButton />
    </div>
  </Container>
)

export default Header
