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
              <h1 className="text-2xl font-semibold text-center">Prive</h1>
            </Link>
          </div>
          <div className="flex">
            <ConnectWallet
              className="h-5 text-xs"
              btnTitle={"Sign in"}
              modalTitle={"Sign in"}
              modalSize={"compact"}
              welcomeScreen={{}}
              modalTitleIconUrl={""}
              theme={"light"}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
