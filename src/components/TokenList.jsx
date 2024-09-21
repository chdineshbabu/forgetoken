"use client";
import React, { useState } from "react";
import { Send, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Coins } from "lucide-react";
import CreateToken from './CreateToken'

const tokens = [
  {
    id: 1,
    name: "Solana",
    symbol: "SOL",
    balance: 10.5,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Serum",
    symbol: "SRM",
    balance: 100,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    name: "Raydium",
    symbol: "RAY",
    balance: 50.75,
    logo: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "Star Atlas",
    symbol: "ATLAS",
    balance: 1000,
    logo: "/placeholder.svg?height=32&width=32",
  },
];

function TokenList() {
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isCreatePop , setIsCreatePop] = useState(false)

  const sortedTokens = [...tokens].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="p-6 my-6 bg-lLight dark:bg-lBlack rounded-md flex flex-col space-y-6">
    <div className="flex justify-between items-center pb-6 pt-2">
      <h1 className="text-2xl font-light">Your Tokens</h1>
      <button onClick={()=>setIsCreatePop(true)} className="p-4 w-64 scale-75 rounded-lg bg-black hover:bg-white hover:text-black hover:scale-90 transition-all delay-75 dark:hover:text-white dark:hover:bg-black   dark:bg-slate-200 text-white dark:text-black  text-md space-x-2 inline-flex justify-center">
        <Coins className="h-5 w-5" />
        Create Solana Token
      </button>
      </div><div className="overflow-x-auto">
        <table className="min-w-full bg-lLight dark:bg-lBlack">
          <thead>
            <tr className="w-full text-left">
              <th className="py-2 px-4">Logo</th>
              <th
                className="py-2 px-4 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Token Name{" "}
                {sortColumn === "name" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="inline" />
                  ) : (
                    <ChevronDown className="inline" />
                  ))}
              </th>
              <th
                className="py-2 px-4 cursor-pointer"
                onClick={() => handleSort("symbol")}
              >
                Symbol{" "}
                {sortColumn === "symbol" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="inline" />
                  ) : (
                    <ChevronDown className="inline" />
                  ))}
              </th>
              <th
                className="py-2 px-4 cursor-pointer"
                onClick={() => handleSort("balance")}
              >
                Balance{" "}
                {sortColumn === "balance" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="inline" />
                  ) : (
                    <ChevronDown className="inline" />
                  ))}
              </th>
              <th className="py-2 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedTokens.map((token) => (
              <tr key={token.id} className="border-b">
                <td className="py-2 px-4">
                  <Image
                    src={token.logo}
                    alt={`${token.name} logo`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </td>
                <td className="py-2 px-4 font-medium">{token.name}</td>
                <td className="py-2 px-4">{token.symbol}</td>
                <td className="py-2 px-4">{token.balance.toLocaleString()}</td>
                <td className="py-2 px-4 text-right">
                  <button className="px-3 py-2 inline-flex items-center rounded-lg bg-black hover:bg-white hover:text-black hover:scale-105 transition-all delay-75 dark:hover:text-white dark:hover:bg-black   dark:bg-slate-200 text-white dark:text-black text-sm justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isCreatePop && (
        <CreateToken onClose={()=>setIsCreatePop(false)}/>
      )}
    </div>
  );
}

export default TokenList;
