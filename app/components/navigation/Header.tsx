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
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo />
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/dashboard"
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="text-black sr-only">Dashboard</span>
              <ArrowUpRight className="w-6 h-6" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
