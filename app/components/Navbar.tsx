"use client";

import IrysIcon from "./IrysIcon";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * NavbarLink properties
 */
interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={`whitespace-nowrap font-robotoMono hover:font-bold pb-4 px-3 text-neutral-500 ${
        isActive ? "!text-black font-bold border-b-2 border-black" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

const Navbar: FC = () => {
  const NAV_LINKS = [
    {
      href: "/fund-withdraw",
      text: "Fund / Withdraw",
    },
    {
      href: "/uploader",
      text: "Uploader",
    },
    {
      href: "/progress-bar-uploader",
      text: "Progress Bar Uploader",
    },
    {
      href: "/gassless-uploader",
      text: "Gassless Uploader",
    },
    {
      href: "/udl-uploader",
      text: "UDL Uploader",
    },
    {
      href: "/transaction-feed",
      text: "Transaction Feed",
    },
    {
      href: "/json-uploader",
      text: "JSON Uploader",
    },
  ];

  return (
    <header className="w-full border-b bg-background text-text">
      <nav>
        <div className="flex flex-col items-center justify-between w-full">
          <div className="w-full h-full py-2 text-lg font-semibold text-center text-white bg-black">
            <Link
              className="flex items-center justify-center gap-4 cursor-pointer"
              href="/"
            >
              <IrysIcon /> <span>Provenance Toolkit</span>
            </Link>
          </div>

          {/* Wrap the navigation links in a container */}
          <div className="flex justify-center w-full pt-4 overflow-x-scroll lg:overflow-hidden">
            <div className="flex justify-center space-x-8">
              {NAV_LINKS.map((link, index) => (
                <NavbarLink key={index} href={link.href}>
                  {link.text}
                </NavbarLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
