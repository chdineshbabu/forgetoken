import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, TokenAccountsFilter } from '@solana/web3.js';
import AddAccount from "./AddAccount";
import WalletInfo from "./WalletInfo";
import Sample from "./Sample";
import TokenList from "./TokenList";
import EmptyList from "./EmptyList";

function Hero() {
  const [tokenAccounts , getTokenAccounts] = useState([])
  const { wallet } = useWallet();
  const {connection} = useConnection()
  const publicKey = wallet?.adapter.publicKey
  const filter: TokenAccountsFilter = {
    programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')
  };
  
  async function getTokent(){
    const tok = await connection.getTokenAccountsByOwner(publicKey,filter)
    const tokenArray = tok.value
    console.log(tokenArray)
  }

  getTokent()
  return (
    <div>
      {wallet ? (
        <div>
          <WalletInfo />
          {tokenAccounts ? <EmptyList /> : <TokenList />}
        </div>
      ) : (
        <AddAccount />
      )}
    </div>
  );
}

export default Hero;
