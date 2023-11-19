import React, { useEffect, useState } from "react";
import { queryFiles } from "../../utils/queryFiles";
import { MetadataEntry } from "../../utils/types";
import FileEntry from "./FileEntry";

const FilesList = ({ address }: any) => {
  const [metadataEntries, setMetadataEntries] = useState<MetadataEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetadata = async () => {
      const results = await queryFiles(address);
      if (results) {
        setMetadataEntries(results);
      }
      setIsLoading(false);
    };
    fetchMetadata();
  }, [address]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
      {metadataEntries.map((entry, index) => (
        <div key={index} className="p-4 border rounded-lg shadow">
          <FileEntry {...entry} />
          {entry.encrypted && (
            <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Decrypt
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilesList;
