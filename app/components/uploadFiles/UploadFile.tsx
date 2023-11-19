"use client";
// app/components/NFTForm.tsx
import React, { ChangeEvent, useState } from "react";
import { uploadFiles } from "../../utils/uploadFiles";
import { useAddress } from "@thirdweb-dev/react";
import { useRef } from "react";
import Link from "next/link";

export const UploadFiles = (props: any) => {
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
    if (address) {
      // Check if address is defined
      const metadata = { name, description, image };
      const url = await uploadFiles(metadata, address);
      if (url) {
        // Only call setMetadataUrl if url is defined.
        setMetadataUrl(url);
        console.log("Metadata uploaded with URL:", url);
        props.onUploadComplete();
      } else {
        console.error("Failed to upload metadata");
      }
    } else {
      console.error("No wallet address available");
      <p>Please connect your wallet to upload files.</p>;
    }
  };

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
          className="w-full px-4 py-2 text-white bg-black rounded-md"
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
              className="px-4 py-2 rounded-md text-zinc-300 bg-slate-100"
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
