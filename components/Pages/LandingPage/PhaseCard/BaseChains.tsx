import useClickOutside from "@/hooks/useClickOutSide"
import Icon from "@/shared/Icon"
import Media from "@/shared/Media"
import { useState } from "react"
import ChainButton from "./ChainButton"

const BaseChains = () => {
  const chains = [
    { label: "Ethereum", link: "/images/ETH.svg" },
    { label: "Polygon", link: "/images/MATIC.svg" },
    { label: "Arbitrum", link: "/images/ARB.svg" },
  ]

  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useClickOutside()
  const [selectedChain, setSelectedChain] = useState(chains[0])

  return (
    <div className="flex flex-col items-start justify-between bg-black_3 p-[15px] rounded-[10px]">
      <p className="font-poppins_medium text-[10px] text-gray_5">SELECT A PAYMENT METHOD</p>
      <div className="w-full relative mt-[30px]" ref={selectRef}>
        <button
          type="button"
          className="flex w-full gap-2 items-center justify-between
                pr-2 bg-black_4 rounded-[10px] p-[5px] font-poppins_medium
                "
          onClick={() => setIsVisibleSelect(!isVisibleSelect)}
        >
          <div className="flex gap-2 items-center texh-white">
            <Media
              type="image"
              link={selectedChain.link}
              blurLink={selectedChain.link}
              containerClasses="w-[20px] aspect-[1/1]"
            />
            <p className="text-white">{selectedChain.label}</p>
          </div>
          <Icon name={isVisibleSelect ? "arrowUp" : "arrowDown"} size={25} color="white" raw />
        </button>
        {isVisibleSelect && (
          <div
            className="absolute top-full left-0 z-[2]
                bg-black_4 py-2 px-3 items-center
                w-[90%] rounded-md flex flex-col gap-2
                left-[50%] translate-x-[-50%] border 
                border-pink_1 "
          >
            {chains.map((chain, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <ChainButton key={i} data={chain} handleClick={setSelectedChain} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BaseChains
