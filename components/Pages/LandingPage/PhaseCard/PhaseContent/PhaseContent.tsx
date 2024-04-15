import WalletConnectButton from "@/components/WalletConnectButton"
import { useEthersSigner } from "@/hooks/useEthersSigner"
import TargetBar from "./TargetBar"
import Prices from "./Prices"
import BaseChains from "../BaseChains"
import Amount from "../Amount"
import Cost from "../Cost"
import ConnectButton from "../ConnectButton"
import BuyButton from "../BuyButton"
import { usePhaseCard } from "@/providers/PhaseCardProvder"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const PhaseContent = () => {
  const signer = useEthersSigner()
  const  { selectedChain } = usePhaseCard()

  return (
    <>
      <TargetBar />
      <Prices />
      <div className="grid grid-cols-2 gap-x-[20px] gap-y-[10px] mt-[10px]">
        <BaseChains />
        <Amount />
        <div className="col-span-2">
          <Cost />
        </div>
      </div>
      {selectedChain?.symbol !== "SOL" && <>
        {signer ? (
          <BuyButton />
        ) : (
          <WalletConnectButton>
            <ConnectButton />
          </WalletConnectButton>
        )}
      </>}
      {selectedChain?.symbol === "SOL" && <>
        <WalletMultiButton />
      </>}
    </>
  )
}

export default PhaseContent
