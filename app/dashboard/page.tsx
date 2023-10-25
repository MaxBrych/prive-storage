import React from "react";
import FundWithdraw from "../components/FundWithdraw";

export default function Dashboard() {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 py-10 mx-auto bg-white text-text md:flex-row">
      <div className="flex flex-col-reverse w-full h-full min-h-[80vh] max-w-6xl gap-4 md:flex-row">
        <div className="w-full p-10 md:w-[320px] border-r px-4 border-r-zinc-100  md:p-0 flex flex-col justify-between">
          <h1 className="text-2xl">Logo</h1>
          <FundWithdraw node="https://node1.irys.xyz" currency="matic" />
        </div>
        <div className="w-full"> Dashboard</div>
      </div>
      <div></div>
    </div>
  );
}
