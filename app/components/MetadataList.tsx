"use client";
import React, { useEffect, useState } from "react";
import { queryMetadata } from "../utils/queryMetadata";
import { MetadataEntry } from "../utils/types";

const MetadataList = () => {
  const [metadataEntries, setMetadataEntries] = useState<MetadataEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetadata = async () => {
      const results = await queryMetadata();
      if (results) {
        // Check if results is defined before calling setMetadataEntries
        setMetadataEntries(results);
      }
      setIsLoading(false);
    };
    fetchMetadata();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="metadata-list">
      {metadataEntries.map((entry, index) => (
        <div key={index} className="metadata-entry">
          <p>Name: {entry.name}</p>
          <p>Description: {entry.description}</p>
          {/* ...other fields you want to display */}
        </div>
      ))}
    </div>
  );
};

export default MetadataList;
