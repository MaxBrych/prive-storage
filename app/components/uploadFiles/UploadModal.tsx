"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import GasslessUploader from "../GasslessUploader";
import UploadFiles from "./UploadFile";
import { Files, columns } from "../../dashboard/columns";
import { useAddress } from "@thirdweb-dev/react";
import { queryFiles } from "@/app/utils/queryFiles";

async function getData(address: string): Promise<Files[]> {
  const results = await queryFiles(address);
  return results;
}

export default function UploadModal() {
  let [isOpen, setIsOpen] = useState(true);
  const [refreshData, setRefreshData] = useState(false);
  const [data, setData] = useState<Files[]>([]);
  const address = useAddress();

  useEffect(() => {
    async function fetchData() {
      if (address) {
        const results = await getData(address);
        setData(results);
      } else {
        console.error("No wallet address available");
      }
    }

    fetchData();
  }, [refreshData, address]);

  const handleUploadComplete = () => {
    setRefreshData(!refreshData); // Toggle refreshData to trigger a re-fetch
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center flex-shrink-0 ">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white transition-all bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Upload Files
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <UploadFiles onUploadComplete={handleUploadComplete} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
