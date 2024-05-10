import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageCropper from "./ImageCropper";
import ImageCancelButton from "./ImageControls";
import { base64ToImg } from "./base64ToImg";

const ImageCrop = () => {
  const [image, setImage] = useState(null);
  const [croppedImageDataURL, setCroppedImageDataURL] = useState(null);

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
    const data = base64ToImg({
      croppedImageDataURL,
      imageName: "Image",
    });
    console.log("data", data);
  }, [croppedImageDataURL]);
  return (
    <div style={{ position: "relative" }}>
      {!image && <ImageUploader onImageSelected={setImage} />}
      {image && (
        <div>
          <ImageCancelButton onClearImage={clearImage} />
          <ImageCropper image={image} onCropComplete={onCropComplete} />
        </div>
      )}
    </div>
  );
};

export default ImageCrop;
