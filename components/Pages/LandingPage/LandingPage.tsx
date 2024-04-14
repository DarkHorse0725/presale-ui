import Container from "@/components/Container"
import Layout from "@/components/Layout"
import PhaseFeature from "./PhaseFeature"
import PhaseCard from "./PhaseCard"

const LandingPage = () => (
  <Layout type="base">
    <Container
      containerClassName="flex mt-[100px]"
      contentClassName="grid grid-cols-10 px-4 gap-12"
    >
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
