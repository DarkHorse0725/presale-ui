import useBaseChainAmount from "@/hooks/useBaseChainAmount"
import Media from "@/shared/Media"

const BaseChains = () => {
  const { amount, onChangeAmount } = useBaseChainAmount()

  return (
    <div className="flex flex-col items-start justify-between bg-black_3 p-[15px] rounded-[10px]">
      <p className="font-poppins_medium text-[10px] text-gray_5">
        INPUT THE AMOUNT YOU WANT TO BUY
      </p>
      <div className="w-full relative mt-[20px]">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-poppins_medium text-gray_6">Max.</span>
          <div
            className="flex w-full gap-2 items-center justify-between
                 bg-black_4 rounded-[10px] overflow-hidden px-2 py-1 text-[16px]"
          >
            <Media
              type="image"
              link="/images/ETH.svg"
              blurLink="/images/ETH.png"
              containerClasses="w-[20px] aspect-[1/1]"
            />
            <input
              type="text"
              value={amount}
              className="bg-black_4 !outline-none !border-none text-[16px]
                                !text-right text-white !font-poppins_medium flex-grow"
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
