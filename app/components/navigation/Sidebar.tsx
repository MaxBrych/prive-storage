import React from "react";
import FundWithdraw from "../FundWithdraw";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col-reverse w-full max-w-6xl min-h-screen gap-4 md:flex-row">
      <div className="w-full  md:w-[320px] border-r  border-r-zinc-100 px-4 py-8 flex flex-col gap-4 justify-between">
        <div>
          <div className="flex items-end justify-end min-h-[75vh]"></div>
          <FundWithdraw node="https://node1.irys.xyz" currency="matic" />
        </div>
      </div>
    </div>
  );
}
