import React from "react";
import FundWithdraw from "./FundWithdraw";

export default function Sidebar() {
  return (
    <div className="flex flex-col-reverse w-full h-full min-h-[80vh] max-w-6xl gap-4 md:flex-row">
      <div className="w-full p-10 md:w-[320px] border-r px-4 border-r-zinc-100  md:p-0 flex flex-col justify-between">
        <h1 className="text-2xl">Logo</h1>
        <FundWithdraw node="https://node1.irys.xyz" currency="matic" />
      </div>
      <div className="flex flex-col w-full gap-6"> </div>
    </div>
  );
}