import { useEffect, useState } from "react";
import { LoaderIcon } from "../ImageCrop/icons";
import ImageCard from "./ImageCard";

const ImageList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  async function getImages() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/files");
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  const handleRefetch = () => getImages();

  if (isLoading) {
    return <LoaderIcon />;
  }

  if (error) {
    return (
      <div
        style={{
          opacity: 0.4,
          fontSize: "2vw",
          color: "red",
          userSelect: "none",
        }}
      >
        Error: {error}{" "}
        <span
          onClick={handleRefetch}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Try Again
        </span>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            opacity: 0.3,
            fontSize: "2vw",
            userSelect: "none",
          }}
        >
          Please Upload Image To View Them Here
        </h1>
        <button
          onClick={handleRefetch}
          style={{
            border: "none",
            padding: "12px",
            width: "24vw",
            cursor: "pointer",
          }}
        >
          Refetch Images
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleRefetch}
        style={{
          border: "none",
          padding: "12px",
          width: "24vw",
          cursor: "pointer",
        }}
      >
        Refetch Images
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 10,
        }}
      >
        {images.map((image, index) => (
          <ImageCard
            image={image}
            getImages={getImages}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
