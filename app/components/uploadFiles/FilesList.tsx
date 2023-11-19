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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metadataEntries.map((entry, index) => (
        <div key={index} className="p-4 border rounded-lg shadow">
          <FileEntry
            {...entry}
            encrypted={entry.encrypted}
            encryptedFileType={entry.encryptedFileType}
            id={entry.id}
          />
        </div>
      ))}
    </div>
  );
};

export default FilesList;
