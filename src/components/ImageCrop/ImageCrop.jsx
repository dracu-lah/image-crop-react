import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageCropper from "./ImageCropper";
import ImageControls from "./ImageControls";
import { dataUrlToImageFile } from "./dataUrlToImageFile";

const ImageCrop = ({ url }) => {
  const [image, setImage] = useState(null);
  const [croppedImageDataURL, setCroppedImageDataURL] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null)
  const onCropComplete = (_, croppedAreaPixels) => {
    cropImage(croppedAreaPixels);
  };

  const clearImage = () => {
    setImage(null);
    setCroppedImageDataURL(null);
  };

  const cropImage = async (croppedAreaPixels) => {
    if (image && croppedAreaPixels) {
      const canvas = document.createElement("canvas");
      const imageElement = document.createElement("img");
      imageElement.src = image;

      const scaleX = imageElement.naturalWidth / imageElement.width;
      const scaleY = imageElement.naturalHeight / imageElement.height;

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        imageElement,
        croppedAreaPixels.x * scaleX,
        croppedAreaPixels.y * scaleY,
        croppedAreaPixels.width * scaleX,
        croppedAreaPixels.height * scaleY,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
      );

      setCroppedImageDataURL(canvas.toDataURL("image/jpeg"));
    }
  };

  useEffect(() => {
    const data = dataUrlToImageFile({
      croppedImageDataURL,
      imageName: "Image",
    });
    setCroppedImage(data)
  }, [croppedImageDataURL]);
  return (
    <div style={{ position: "relative" }}>
      {!image && <ImageUploader onImageSelected={setImage} />}
      {image && (
        <div>
          <ImageControls onClearImage={clearImage} image={image && croppedImage} url={url} />
          <ImageCropper image={image} onCropComplete={onCropComplete} />
        </div>
      )}
    </div>
  );
};

export default ImageCrop;
