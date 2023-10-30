import React from "react";
import FundWithdraw from "../FundWithdraw";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col-reverse w-full max-w-6xl min-h-screen gap-4 md:flex-row">
      <div className="w-full  md:w-[320px] border-r  border-r-zinc-100 px-4 py-8 flex flex-col gap-4 justify-between">
        <Link href="/" className="text-2xl">
          Logo
        </Link>
        <div>
          <FundWithdraw node="https://node1.irys.xyz" currency="matic" />
          <div className="flex flex-col justify-center w-full py-4 mt-6 border border-b-0 border-l-0 border-r-0 border-t-zinc-100">
            <ConnectWallet
              className="h-5 text-xs"
              btnTitle={"Einloggen"}
              modalTitle={"Einloggen"}
              modalSize={"compact"}
              welcomeScreen={{}}
              modalTitleIconUrl={""}
              theme={"light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
