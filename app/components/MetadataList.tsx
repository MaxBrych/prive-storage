"use client";
import React, { useEffect, useState } from "react";
import { queryMetadata } from "../utils/queryMetadata";
import { MetadataEntry } from "../utils/types";
import MetadataEntryComponent from "./MetadataEntry";

const MetadataList = () => {
  const [metadataEntries, setMetadataEntries] = useState<MetadataEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetadata = async () => {
      const results = await queryMetadata();
      if (results) {
        const metadataEntriesWithEncryption: MetadataEntry[] = results.map(
          (entry) => ({
            ...entry,
            encrypted: false,
            encryptedFileType: "", // Add the missing property
            id: "", // Add the missing property
          })
        );
        setMetadataEntries(metadataEntriesWithEncryption);
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

export default MetadataList;
