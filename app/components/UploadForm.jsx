"use client";
// app/components/NFTForm.tsx
import React, { useState } from "react";
import { uploadMetadata } from "../utils/uploadMetadata";
import TipTap from "./Editor/TipTap";
import Tiptap from "./Editor/TipTap";
import { useRef } from "react";

export const UploadForm = () => {
  const editorRef = (useRef < { getHTML: () => string }) | (null > null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [metadataUrl, setMetadataUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const metadata = { name, description, image };
    const url = await uploadMetadata(metadata);
    setMetadataUrl(url); // Update the state with the new URL
    console.log("Metadata uploaded with URL:", url);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <TipTap ref={editorRef} />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Upload
        </button>
      </form>
      <div className="metadata-url-display">
        {metadataUrl && (
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
        )}
      </div>
    </>
  );
};

export default UploadForm;
