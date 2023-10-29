import getIrys from "./getIrys";
import * as fs from "fs/promises";

export const uploadFiles = async (files: any) => {
  const irys = await getIrys();
  const fileToUpload = new Blob([JSON.stringify(files)], {
    type: "application/json",
  });
  const file = new File([fileToUpload], "metadata.json", {
    type: "application/json",
  });

  // Add the AppName tag along with the Content-Type tag
  const tags = [
    { name: "Content-Type", value: "application/json" },
    { name: "AppName", value: "PriveStorage" },
  ];

  try {
    const response = await irys.uploadFile(file, { tags });
    console.log(`File uploaded ==> https://gateway.irys.xyz/${response.id}`);
    return response.id;
  } catch (e) {
    console.error("Error uploading file ", e);
  }
};
