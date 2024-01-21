import React from "react";
import FundWithdraw from "../FundWithdraw";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { Archive, Home } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex flex-col-reverse w-full max-w-6xl min-h-screen gap-4 md:flex-row">
      <div className="w-full  md:w-[320px] border-r  border-r-zinc-100 px-4 py-8 flex flex-col gap-4 justify-between">
        <div>
          <Link
            href="/dashboard"
            className="flex items-center justify-start flex-grow-0 gap-2 px-4 border rounded-lg h-11 bg-zinc-50 border-zinc-100 hover:bg-zinc-100"
          >
            <Home className="w-4 h-4" />
            <h1 className="text-sm font-medium text-center">Dashboard</h1>
          </Link>
          <div className="flex items-end justify-end min-h-[50vh]"></div>
          <FundWithdraw node="https://node1.irys.xyz" currency="matic" />
        </div>
      </div>
    </div>
  );
}
