import Media from "@/shared/Media"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChainButton = ({ chainIcon = "", chainName }) => (
  <button
    type="button"
    className="flex gap-2 items-center w-full justify-start text-white font-poppins_medium"
  >
    <Media
      type="image"
      link="/images/ARB.svg"
      blurLink="/images/ARB.png"
      containerClasses="w-[20px] aspect-[1/1]"
    />
    {chainName}
  </button>
)

export default ChainButton
