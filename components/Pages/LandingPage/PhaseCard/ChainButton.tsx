import Media from "@/shared/Media"

// eslint-disable-next-line  @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars
const ChainButton = ({ data, handleClick = (data: any) => {} }) => (
  <button
    type="button"
    onClick={() => handleClick(data)}
    className="flex gap-2 items-center w-full text-white justify-start text-white font-poppins_medium"
  >
    <Media
      type="image"
      link={data.link}
      blurLink={data.link}
      containerClasses="w-[20px] aspect-[1/1]"
    />
    {data.label}
  </button>
)

export default ChainButton
