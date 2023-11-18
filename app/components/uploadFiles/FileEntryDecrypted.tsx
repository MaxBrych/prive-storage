"use client";
import React, { useEffect, useState } from "react";
import { decryptFile } from "../../utils/lit";

export default function FileEntry({
  id,
  name,
  description,
  timestamp,
  address,
  image,
}: any) {
  const [decryptedImage, setDecryptedImage] = useState("");
  const blob = new Blob([new Uint8Array(image.data)], { type: "image/jpeg" }); // adjust the MIME type if necessary
  const url = URL.createObjectURL(blob);

  useEffect(() => {
    const decryptImageData = async () => {
      try {
        const result = await decryptFile(id, "image/jpeg"); // Pass the id and encryptedFileType
        setDecryptedImage(result); // Update state with decrypted image
      } catch (error) {
        console.error("Error decrypting file:", error);
      }
    };
    decryptImageData();
  }, [id]); // Update the dependency to id

  return (
    <div className="metadata-entry">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Timestamp: {timestamp}</p>
      <p>Address: {address}</p>
      <img src={decryptedImage || image} alt={name} />
    </div>
  );
}
