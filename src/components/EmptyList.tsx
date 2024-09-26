'use client'
import React, { useState } from "react";
import { AlertCircle, Coins } from "lucide-react";
import CreateToken from './CreateToken'

function EmptyList() {
    const [isCreatePop,setIsCreatePop] = useState(false)
  return (
    <div className="p-6 my-6 bg-lLight dark:bg-lBlack rounded-md flex flex-col gap-6 justify-between">
      <div className="flex items-center space-x-2">
        <AlertCircle className="h-5 w-5" />
        <span className="text-2xl font-light">No Solana Tokens Found</span>
      </div>
      <p className="text-sm">
        You don&apos;t have any tokens created on the Solana blockchain for this
        wallet. Create a new token to get started.
      </p>
      <div className="flex justify-center min-h-56 items-center  ">
      <button onClick={()=>setIsCreatePop(true)} className="p-4 w-64 scale-75 rounded-lg gap-1 bg-black hover:bg-white hover:text-black hover:scale-90 transition-all delay-75 dark:hover:text-white dark:hover:bg-black   dark:bg-slate-200 text-white dark:text-black  text-lg flex justify-center">
        <Coins className="h-5 w-5" />
        Create Solana Token
      </button>
      </div>
      {isCreatePop && (
        <CreateToken onClose={()=>setIsCreatePop(false)}/>
      )}
    </div>
  );
}
export default EmptyList