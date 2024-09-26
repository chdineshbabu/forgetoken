'use client'
import React,{useMemo, useState} from 'react'
import Navbar from '../components/Navbar'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import {solContext} from '../context/context'
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import Hero from '@/components/Hero'

export default function Home() {
  const [tokenAccounts, setTokenAccounts] = useState([])

  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  return (
    <div>
      <solContext>
      <ConnectionProvider endpoint={'https://devnet.helius-rpc.com/?api-key=90aa40ff-d8d9-465c-8f90-4e74812913a0'}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
          <Navbar />
          <p className='py-4 font-extralight text-xl opacity-70'>Create your custom token on Solana blockchain</p>
          <Hero />
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </solContext>

    </div > 
  );
}
