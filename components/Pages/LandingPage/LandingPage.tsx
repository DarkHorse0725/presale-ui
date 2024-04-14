import Container from "@/components/Container"
import Layout from "@/components/Layout"
import PhaseFeature from "./PhaseFeature"
import PhaseCard from "./PhaseCard"

const LandingPage = () => (
  <Layout type="base">
    <Container containerClassName="flex mt-6" contentClassName="grid grid-cols-10 gap-[50px]">
      <div className="col-span-6">
        <PhaseCard />
      </div>
      <div className="col-span-4">
        <PhaseFeature />
      </div>
    </Container>
  </Layout>
)

export default LandingPage
