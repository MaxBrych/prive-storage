import "./globals.css";
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

import { Inter, Roboto } from "next/font/google";

import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import Header from "./components/navigation/Header";

export const metadata: Metadata = {
  title: "DeTransfer",
  description: "Transfer files on-chain",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${inter.className} bg-background relative`}>
      <body className={inter.className}>
        <Providers>
          {/*<Navbar />*/}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
