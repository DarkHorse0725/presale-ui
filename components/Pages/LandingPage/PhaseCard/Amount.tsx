import useClickOutside from "@/hooks/useClickOutSide"
import Media from "@/shared/Media"
import { useState } from "react"

const BaseChains = () => {
  // eslint-disable-next-line
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useClickOutside()
  const [amount, setAmount] = useState(0)

  const onChangeAmount = (e) => {
    const temp = parseInt(e.target.value, 10)

    if (Number.isNaN(temp)) {
      setAmount(0)
      return
    }
    setAmount(temp)
  }

  return (
    <div className="flex flex-col items-start justify-between bg-black_3 p-[15px] rounded-[10px]">
      <p className="font-poppins_medium text-[10px] text-gray_5">
        INPUT THE AMOUNT YOU WANT TO BUY
      </p>
      <div className="w-full relative mt-[30px]" ref={selectRef}>
        <div
          className="flex w-full gap-2 items-center justify-between
                pr-2 bg-black_4 rounded-[10px] p-[5px]"
        >
          <div className="w-full flex items-center gap-2 items-center text-white">
            <Media
              type="image"
              link="/images/ETH.svg"
              blurLink="/images/ETH.svg"
              containerClasses="w-[20px] aspect-[1/1]"
            />
            <input
              type="text"
              value={amount}
              className="bg-black_4 !outline-none !border-none
                                !text-right text-white flex-grow"
              placeholder="Enter amount"
              onChange={onChangeAmount}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseChains
