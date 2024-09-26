import React from 'react'
import {
  MINT_SIZE,
  TOKEN_2022_PROGRAM_ID,
  createInitializeMint2Instruction,
  getMinimumBalanceForRentExemptMint,
} from "@solana/spl-token";
import {
  Connection,
  Keypair,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';


function Sample() {
  const {wallet} = useWallet();
  const {connection} = useConnection();
  
  return (
    <div>Sample</div>
  )
}

export default Sample