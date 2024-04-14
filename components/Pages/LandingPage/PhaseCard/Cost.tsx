import useClickOutside from "@/hooks/useClickOutSide"
import Media from "@/shared/Media"
import { useState } from "react"

const Cost = () => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
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
    <div className="flex flex-col items-start justify-content-center bg-black_3 p-[15px] rounded-[10px]">
      <div className="w-full flex justify-between items-start">
        <p className="text-gray_5 text-[10px] font-poppins_medium">YOU WILL GET</p>
        <div className="flex flex-col items-end text-gray_5 text-[10px] font-poppins_medium">
          <span className="">USD COST</span>
          <span className="font-poppins_medium text-gray_6 text-[10px]">$0.00</span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-6">
        <Media
          type="image"
          link="/images/birdbyte.svg"
          blurLink="/images/birdbyte.png"
          containerClasses="w-[97px] aspect-[90/15]"
        />
        <div className="relative" ref={selectRef}>
          <div
            className="flex w-full gap-2 items-center justify-between
                pr-2 bg-black_4 rounded-[10px] p-[5px]"
          >
            <div className="w-full flex justify-between items-center gap-2 items-center text-white">
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
    </div>
  )
}

export default Cost
