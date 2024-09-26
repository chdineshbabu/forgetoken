import React, { useEffect, useState } from 'react'
import ThemeSwitch from './ThemeSwitcher'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Wallet } from 'lucide-react';
function Navbar() {
  const [balance, setBalance] = useState(0)
  const { wallet } = useWallet();
  const { connection } = useConnection();
  const publicKey = wallet?.adapter.publicKey
  async function getBalance() {
    const bal: number = await connection.getBalance(publicKey);
    setBalance(bal / LAMPORTS_PER_SOL)
  }
  getBalance()
  return (
    <div className='flex justify-between items-center py-2'>
      <div className='text-5xl font-light  '>
        ForgeToken
      </div>
      <div className=''>
        <ThemeSwitch />
        {wallet ? <h1 className='text-sm flex felx-col items-center pb-1'><Wallet className='h-5' />:{balance} SOL</h1>:<></>}
        
      </div>
    </div>
  )
}

export default Navbar