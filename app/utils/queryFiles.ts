import Query from "@irys/query";
import { decryptFile } from "../utils/lit"; // Import decryptFile function

export interface MetadataEntry {
  image: string;
  name: string;
  encrypted: boolean; // Add a flag to indicate if the entry is encrypted
}

export const queryFiles = async (
  address: string
): Promise<MetadataEntry[] | any> => {
  async function fetchFileContent(transactionId: string, encrypted: boolean) {
    try {
      const url = `https://node1.irys.xyz/${transactionId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }
      if (encrypted) {
        // If the file is encrypted, decrypt it
        const fileType = "application/json";
        return await decryptFile(url, fileType);
      } else {
        // If the file is not encrypted, just return its content
        return await response.json();
      }
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  const myQuery = new Query();
  try {
    const results = await myQuery
      .search("irys:transactions")
      .tags([
        { name: "AppName", values: ["PriveStorage"] },
        { name: "address", values: [address] },
      ])
      .limit(20);
    console.log(results);

    const metadataEntries = await Promise.all(
      results.map(async (result) => {
        const isEncrypted = result.tags.some(
          (tag) => tag.name === "Irys-Encrypted" && tag.value === "true"
        );
        const fileContent = await fetchFileContent(result.id, isEncrypted);
        return {
          id: result.id,
          timestamp: result.timestamp,
          address: result.address,
          name: fileContent.name,
          image: fileContent.image,
          encrypted: isEncrypted,
        };
      })
    );

    return metadataEntries;
  } catch (e) {
    console.error("Error querying metadata ", e);
    return [];
  }
};
