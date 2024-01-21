import Image from "next/image";
import UploadFiles from "./components/uploadFiles/UploadFile";
import Link from "next/link";
import { UploadTabs } from "./components/UploadTabs";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="flex flex-col gap-4 px-4 bg-white max-w-7xl md:flex-row">
        {/* Left Column */}
        <div className="w-full py-32 mx-auto md:px-8 md:max-w-1/2 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Learn more about Irys.{" "}
              <a
                href="https://irys.xyz/"
                className="font-semibold text-cyan-500"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-start">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Permanent File Storage onchain
            </h1>
            <p className="mt-6 mb-4 text-lg leading-8 text-gray-600">
              Store your images on arweave with ease and ensure its provenance
              and permanent avalability
            </p>
            <Link
              href="/dashboard"
              type="button"
              className="-m-2.5 mt-2 inline-flex items-center gap-2 rounded-lg px-3 bg-zinc-100 justify-center text-sm py-2.5 text-gray-700"
            >
              Dashboard
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right Column*/}
        <div className="flex flex-col items-center justify-center w-full md:min-h-screen md:max-w-1/2">
          {/*  <UploadFiles /> */}
          <div className="">
            <UploadTabs />
          </div>
        </div>
      </div>
    </div>
  );
} // Home
