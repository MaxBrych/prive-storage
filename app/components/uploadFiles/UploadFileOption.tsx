"use client";
// app/components/NFTForm.tsx
import React, { ChangeEvent, useState } from "react";
import { uploadFiles } from "../../utils/uploadFilesEncrypted";
import { useAddress } from "@thirdweb-dev/react";
import { useRef } from "react";
import Link from "next/link";
import { encryptAndUploadFile } from "../../utils/lit";

export const UploadFiles = (props: any) => {
  const [encryptData, setEncryptData] = useState(true);
  const editorRef = useRef<{ getHTML: () => string } | null>(null);
  const address = useAddress();
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [metadataUrl, setMetadataUrl] = useState("");

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Get the description from the editor
    const description = editorRef.current?.getHTML() || "";

    if (!address) {
      console.error("No wallet address available");
      return;
    }

    if (!image) {
      console.error("No image selected");
      return;
    }

    const metadata = { name, description, image };

    if (encryptData) {
      try {
        // Convert the image data URL back to a file object
        const file = dataURLtoFile(image, name); // Implement this function to convert data URL to a file

        const encryptedTx = await encryptAndUploadFile(file); // Now pass only the file

        if (typeof encryptedTx === "string") {
          setMetadataUrl(encryptedTx);
          console.log("Encrypted metadata uploaded with URL:", encryptedTx);
        } else {
          console.error("Failed to obtain encrypted transaction URL");
        }
      } catch (error) {
        console.error("Error during encryption and upload:", error);
      }
    } else {
      try {
        const url = await uploadFiles(metadata, address);
        if (typeof url === "string") {
          setMetadataUrl(url);
          console.log("Metadata uploaded with URL:", url);
        } else {
          console.error("Failed to obtain URL from uploadFiles");
        }
      } catch (error) {
        console.error("Error during upload:", error);
      }
    }

    props.onUploadComplete();
  };

  // Function to convert a data URL to a file object
  function dataURLtoFile(dataurl: any, filename: any) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 space-y-4 bg-white border rounded-lg border-zinc-100"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          onChange={handleFileChange}
          className="flex flex-col items-center justify-center w-full h-40 p-2 border border-dashed rounded-lg cursor-pointer"
          placeholder="."
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Upload
        </button>
      </form>
      <div className="metadata-url-display">
        {metadataUrl && (
          <>
            <p>
              Metadata uploaded at:{" "}
              <a
                href={`https://gateway.irys.xyz/${metadataUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://gateway.irys.xyz/{metadataUrl}
              </a>
            </p>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-blue-500 rounded-md bg-slate-100"
            >
              View in Dashboard{" "}
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default UploadFiles;
