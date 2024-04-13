/* eslint-disable-next-line */
import Header from "../Header"
import SeoHead from "../SeoHead"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen">
    <div className="w-full fixed top-0 left-0 z-[10]">
      <SeoHead title="Presale" description="Presale UI" image="/images/Logo/logo.png" />
      <Header />
      {children}
    </div>
  </div>
)

export default BaseLayout
