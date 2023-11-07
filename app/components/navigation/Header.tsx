"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
export default function Header() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 flex flex-row justify-center items-center gap-2"
            >
              <Logo />
              <h1 className="text-xl font-semibold text-center">Storage</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/dashboard"
              type="button"
              className="-m-2.5 inline-flex items-center gap-2 rounded-full px-2 bg-zinc-100 justify-center text-sm py-2.5 text-gray-700"
            >
              Dashboard
              <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
