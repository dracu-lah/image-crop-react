import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageCropper from "./ImageCropper";
import ImageControls from "./ImageControls";
import { base64ToImg } from "./base64ToImg";

const ImageCrop = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    cropImage(croppedAreaPixels);
  };

  const clearImage = () => {
    setImage(null);
    setCroppedImage(null);
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

      const croppedImageDataURL = canvas.toDataURL("image/jpeg");
      setCroppedImage(croppedImageDataURL);
    }
  };

  const handleProfileUpload = () => {
    const data = base64ToImg({ croppedImage, imageName: "Image" });
    console.log("data", data);
  };

  return (
    <div style={{ position: "relative" }}>
      {!image && <ImageUploader onImageSelected={setImage} />}
      {image && (
        <div>
          <ImageControls
            onClearImage={clearImage}
            onUpdate={handleProfileUpload}
          />
          <ImageCropper image={image} onCropComplete={onCropComplete} />
        </div>
      )}
    </div>
  );
};

export default ImageCrop;
