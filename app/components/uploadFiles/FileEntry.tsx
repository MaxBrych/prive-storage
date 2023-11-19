import React, { useState } from "react";
import { decryptFile } from "../../utils/lit";
import { FaLock } from "react-icons/fa";
import Spinner from "../Spinner";

export default function FileEntry({
  id,
  name,
  description,
  timestamp,
  address,
  image,
  encryptedFileType,
  encrypted,
}: any) {
  const [decryptedImage, setDecryptedImage] = useState("");
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [txProcessing, setTxProcessing] = useState(false);

  const handleDecrypt = async () => {
    if (!encrypted || !id) return;

    setTxProcessing(true);
    try {
      const decryptedData = await decryptFile(id, encryptedFileType); // Use the file's ID for decryption
      setDecryptedImage(decryptedData);
      setIsDecrypted(true);
    } catch (error) {
      console.error("Error decrypting file:", error);
    }
    setTxProcessing(false);
  };

  return (
    <div className="text-xs">
      {/*<p>ID: {id}</p>*/}
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      {/*  <p>Timestamp: {timestamp}</p>*/}
      {/*<p>Address: {address}</p> */}
      {encrypted && !isDecrypted ? (
        <button
          onClick={handleDecrypt}
          disabled={txProcessing}
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          {txProcessing ? <Spinner /> : <FaLock />}
        </button>
      ) : (
        <img src={decryptedImage || image} alt={name} />
      )}
    </div>
  );
}
