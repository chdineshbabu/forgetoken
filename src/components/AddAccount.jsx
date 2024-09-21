'use client'
// AddAccount.js
import { useState } from 'react'
import { WalletIcon, UploadIcon } from 'lucide-react'
import ImportWallet from './ImportWallet'

function AddAccount() {
  const [isImportModalOpen, setImportModalOpen] = useState(false)

  return (
    <div className='p-12 my-12 bg-lLight dark:bg-lBlack rounded-md items-center flex flex-col text-center'>
      <div>
        To get started, Please import or connect your Solana wallet.
      </div>
      <div className='py-12 justify-center'>
        <button className='p-4 w-72 rounded-lg gap-1 bg-black hover:bg-white hover:text-black hover:scale-105 transition-all delay-75 dark:hover:text-white dark:hover:bg-black dark:bg-slate-200 text-white dark:text-black text-md flex justify-center'>
          <WalletIcon className="mr-2 h-6 w-6" />
          Connect Wallet
        </button>
        <p className='my-2'>Or</p>
        <button 
          onClick={() => setImportModalOpen(true)}
          className='p-4 w-72 rounded-lg gap-1 bg-black hover:bg-white hover:text-black hover:scale-105 transition-all delay-75 dark:hover:text-white dark:hover:bg-black dark:bg-slate-200 text-white dark:text-black text-md flex justify-center'
        >
          <UploadIcon className="mr-2 h-6 w-6" />
          Import Wallet
        </button>
      </div>

      {isImportModalOpen && (
        <ImportWallet onClose={() => setImportModalOpen(false)} />
      )}
    </div>
  )
}

export default AddAccount
