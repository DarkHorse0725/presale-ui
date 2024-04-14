import useClickOutside from "@/hooks/useClickOutSide"
import Icon from "@/shared/Icon"
import Media from "@/shared/Media"
import ChainButton from "./ChainButton"

const PairChains = () => {
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useClickOutside()

  return (
    <div>
      <p className="pb-1">Chain</p>
      <div className="w-full relative border-r border-r-black_4" ref={selectRef}>
        <button
          type="button"
          className="flex w-full gap-2 items-center justify-between
                pr-2"
          onClick={() => setIsVisibleSelect(!isVisibleSelect)}
        >
          <div className="flex gap-2 items-center">
            <Media
              type="image"
              link="/images/OP.svg"
              blurLink="/images/OP.svg"
              containerClasses="w-[20px] aspect-[1/1]"
            />
            <p>Optimism</p>
          </div>
          <Icon name={isVisibleSelect ? "arrowUp" : "arrowDown"} size={25} color="white" raw />
        </button>
        {isVisibleSelect && (
          <div
            className="absolute top-full left-0 z-[2]
                bg-black_2 py-2 px-3
                w-full rounded-md flex flex-col gap-2"
          >
            <ChainButton chainIcon="/images/ETH.svg" chainName="Ethereum" />
            <ChainButton chainIcon="/images/OP.svg" chainName="Optimism" />
            <ChainButton chainIcon="/images/ARB.svg" chainName="Arbitrum" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PairChains
