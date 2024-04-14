import Container from "@/components/Container"
import Layout from "@/components/Layout"
import PhaseFeature from "./PhaseFeature"
import PhaseCard from "./PhaseCard"

const LandingPage = () => (
  <Layout type="base">
    <Container containerClassName="flex mt-1" contentClassName="grid grid-cols-12 gap-[50px]">
      <div className="col-span-7">
        <PhaseCard />
      </div>
      <div className="col-span-5">
        <PhaseFeature />
      </div>
    </Container>
  </Layout>
)

export default LandingPage
