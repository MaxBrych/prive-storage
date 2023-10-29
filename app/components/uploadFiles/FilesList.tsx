"use client";
import React, { useEffect, useState } from "react";
import { queryFiles } from "../../utils/queryFiles";
import { MetadataEntry } from "../../utils/types";
import MetadataEntryComponent from "./FileEntry";

const FilesList = (address: string) => {
  const [metadataEntries, setMetadataEntries] = useState<MetadataEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetadata = async () => {
      const results = await queryFiles(address);
      if (results) {
        // Check if results is defined before calling setMetadataEntries
        setMetadataEntries(results);
      }
      setIsLoading(false);
    };
    fetchMetadata();
  }, []);
  console.log(metadataEntries);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="metadata-list">
      {metadataEntries.map((entry, index) => (
        <MetadataEntryComponent key={index} {...entry} />
      ))}
    </div>
  );
};

export default FilesList;
