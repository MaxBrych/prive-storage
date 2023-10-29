import Query from "@irys/query";
export interface MetadataEntry {
  image: string;
  name: string;
}

export const queryFiles = async (
  address: string
): Promise<MetadataEntry[] | any> => {
  async function fetchFileContent(transactionId: string) {
    try {
      const response = await fetch(`https://node1.irys.xyz/${transactionId}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
      }
      const fileContent = await response.json();
      return fileContent;
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
        const fileContent = await fetchFileContent(result.id);
        return {
          id: result.id,
          timestamp: result.timestamp,
          address: result.address,
          name: fileContent.name,
          image: fileContent.image,
        };
      })
    );

    return metadataEntries;
  } catch (e) {
    console.error("Error querying metadata ", e);
    return [];
  }
};
