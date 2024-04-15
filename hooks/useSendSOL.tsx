import handleTxError from "@/lib/handleTxError"
// import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL, sendAndConfirmTransaction  } from '@solana/web3.js';
// import * as solanaWeb3 from "@solana/web3.js";
// import * as anchor from "@project-serum/anchor";
// import { Program, AnchorProvider, web3, utils } from '@project-serum/anchor';
import usePrepareSolana from "./usePrepareSolana"
// import { BIRDB_SOLANA_WALLET } from "@/lib/consts";
// import { Wallet, useConnection, useWallet} from "@solana/wallet-adapter-react";
// import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
// import { Transaction } from "@solana/web3.js";
// import { useState } from "react";

const useSendSOL = () => {
  const { solana } = usePrepareSolana()
  const sendSOL = async (amount) => {
    try {
      // if (!publicKey) throw new WalletNotConnectedError();
      // const response = await connectWallet()
      // if (!response) return {error: true}
      // const birdByteSolanaAddress = new solanaWeb3.PublicKey(
      //   BIRDB_SOLANA_WALLET
      // )
      // const myAddress = new solanaWeb3.PublicKey(
      //   "7rmPxigbHpz2jyJ961psKBbhUZX5Qi4TEyhmERha59Bz"
      // )
      // const signature = await sendTransaction(transaction, connection);
      // const tx = await connection.confirmTransaction(signature, "processed");
      // return tx
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  return {
    sendSOL,
  }
}

export default useSendSOL
