import useClickOutside from "@/hooks/useClickOutSide"
import Icon from "@/shared/Icon"
import Media from "@/shared/Media"
import ChainButton from "./ChainButton"

const BaseChains = () => {
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useClickOutside()

  return (
    <div className="flex flex-col items-start justify-between bg-black_3 p-[15px] rounded-[10px]">
      <p className="font-poppins_medium text-[10px] text-gray_5">SELECT A PAYMENT METHOD</p>
      <div className="w-full relative mt-[30px]" ref={selectRef}>
        <button
          type="button"
          className="flex w-full gap-2 items-center justify-between
                pr-2 bg-black_4 rounded-[10px] p-[5px] font-poppins_medium"
          onClick={() => setIsVisibleSelect(!isVisibleSelect)}
        >
          <div className="flex gap-2 items-center texh-white">
            <Media
              type="image"
              link="/images/ETH.svg"
              blurLink="/images/ETH.svg"
              containerClasses="w-[20px] aspect-[1/1]"
            />
            <p className="text-white">ETH</p>
          </div>
          <Icon name={isVisibleSelect ? "arrowUp" : "arrowDown"} size={25} color="white" raw />
        </button>
        {isVisibleSelect && (
          <div
            className="absolute top-full left-0 z-[2]
                bg-black_4 py-2 px-3 items-center
                w-full rounded-md flex flex-col gap-2"
          >
            <ChainButton chainIcon="/images/ETH.svg" chainName="Ethereum" />
            <ChainButton chainIcon="/images/MATIC.svg" chainName="Polygon" />
            <ChainButton chainIcon="/images/ARB.svg" chainName="Arbitrum" />
          </div>
        )}
      </div>
    </div>
  )
}

export default BaseChains
