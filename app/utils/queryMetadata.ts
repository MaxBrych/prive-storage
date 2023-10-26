// utils/queryMetadata.ts
import Query from "@irys/query";
export interface MetadataEntry {
  name: string;
  description: string;
  // ... other fields you expect to receive
}

export const queryMetadata = async (): Promise<MetadataEntry[] | undefined> => {
  const myQuery = new Query();
  try {
    const results = await myQuery
      .search("irys:transactions")
      .tags([{ name: "AppName", values: ["Prive"] }])
      .limit(20); // Adjust limit as needed

    // Map the results to your MetadataEntry structure
    return results.map((result) => {
      const nameTag = result.tags.find((tag) => tag.name === "name");
      const descriptionTag = result.tags.find(
        (tag) => tag.name === "description"
      );
      return {
        name: nameTag ? nameTag.value : "",
        description: descriptionTag ? descriptionTag.value : "",
        // ... other fields you expect to receive
      };
    });
  } catch (e) {
    console.error("Error querying metadata ", e);
    return [];
  }
};
