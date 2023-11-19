import React, { useEffect, useState } from "react";

export default function FileEntry({
  id,
  name,
  description,
  timestamp,
  address,
  image,
}: any) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (image && typeof image === "string") {
      // If image is a string, it's likely a URL
      setImageUrl(image);
    } else if (image && image.data) {
      // If image has a data property, create a Blob
      const blob = new Blob([new Uint8Array(image.data)], {
        type: "image/jpeg",
      }); // Adjust MIME type as necessary
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    }
  }, [image]);

  return (
    <div className="text-xs">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Timestamp: {timestamp}</p>
      <p>Address: {address}</p>
      {imageUrl && <img src={imageUrl} alt={name} />}
    </div>
  );
}
