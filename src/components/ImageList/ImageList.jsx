import { useEffect, useState } from "react";
import { LoaderIcon } from "../ImageCrop/icons";

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

  if (isLoading) {
    return <LoaderIcon />;
  }

  if (error) {
    return (
      <div>
        Error: {error} <span>Try Again</span>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <h1 style={{ opacity: 0.3, fontSize: "2vw" }}>
        Please Upload Image To View Them Here
      </h1>
    );
  }

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`image-${index}`} />
      ))}
    </div>
  );
};

export default ImageList;
