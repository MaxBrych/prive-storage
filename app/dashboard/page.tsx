"use client";
import React, { useEffect, useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { DataTable } from "./data-table";
import { Files, columns } from "./columns";
import Sidebar from "../components/navigation/Sidebar";
import UploadFiles from "../components/uploadFiles/UploadFile";
import FilesList from "../components/uploadFiles/FilesList";
import { queryFiles } from "../utils/queryFiles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getData(address: string): Promise<Files[]> {
  const results = await queryFiles(address);
  return results;
}

export default function Dashboard() {
  const [refreshData, setRefreshData] = useState(false);
  const [data, setData] = useState<Files[]>([]);
  const [activeTab, setActiveTab] = useState("dataTable");
  const address = useAddress();

  useEffect(() => {
    async function fetchData() {
      if (address) {
        const results = await getData(address);
        setData(results);
      }
    }
    fetchData();
  }, [refreshData, address]);

  const handleUploadComplete = () => {
    setRefreshData(!refreshData);
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 mx-auto bg-white text-text md:flex-row">
      <div className="hidden md:flex md:flex-col">
        <Sidebar />
      </div>
      <div className="flex flex-col items-start justify-start w-full px-4 pt-32 md:px-8">
        <DataTable
          columns={columns}
          data={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "filesList" && <FilesList address={address} />}
      </div>
    </div>
  );
}
