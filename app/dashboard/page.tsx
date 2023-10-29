"use client";
import React, { useEffect, useState } from "react";

import { DataTable } from "./data-table";
import { Files, columns } from "./columns";
import Sidebar from "../components/Sidebar";
import UploadFiles from "../components/uploadFiles/UploadFile";
import FilesList from "../components/uploadFiles/FilesList";
import { queryFiles } from "../utils/queryFiles";

async function getData(): Promise<Files[]> {
  const results = await queryFiles();
  return results;
}

export default function Dashboard() {
  const [refreshData, setRefreshData] = useState(false);
  const [data, setData] = useState<Files[]>([]);

  useEffect(() => {
    async function fetchData() {
      const results = await getData();
      setData(results);
    }

    fetchData();
  }, [refreshData]);

  const handleUploadComplete = () => {
    setRefreshData(!refreshData); // Toggle refreshData to trigger a re-fetch
  };

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 py-10 mx-auto bg-white text-text md:flex-row">
      <div className="hidden md:flex md:flex-col ">
        <Sidebar />
      </div>
      <div className="flex flex-col items-start justify-start w-full px-4 md:px-8">
        <UploadFiles onUploadComplete={handleUploadComplete} />
        {/*<FilesList />*/}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
