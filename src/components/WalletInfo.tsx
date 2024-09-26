"use client";

import { WalletConnectButton, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React, { useState, useEffect } from "react";

const WalletInfo: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("Good day");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const sampleAddress: string = "7v91N7iZ9mNicL8WfG6cgSCKyRXydQjLh6UYBWwm6y1Q";

  return (
    <div className="p-6 bg-lLight dark:bg-lBlack rounded-md flex justify-between">
      <div className="flex items-center gap-4">
        <p className="font-light text-2xl">{greeting}</p>
      </div>
      <div>
        <WalletMultiButton className="p-2 w-56 scale-75 rounded-lg gap-1 bg-black hover:bg-white hover:text-black hover:scale-90 transition-all delay-75 dark:hover:text-white dark:hover:bg-black dark:bg-slate-200 text-white dark:text-black text-lg flex justify-center"/>
      </div>
    </div>
  );
}

export default WalletInfo;
  