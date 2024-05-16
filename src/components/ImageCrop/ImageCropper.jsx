import { useState } from "react";
import Cropper from "react-easy-crop";
import { useCroppedImage } from "./useCroppedImage";

const ImageCropper = ({ image, onCropComplete }) => {
  const {
    aspect,
    cropperWidth: width,
    cropperHeight: height,
  } = useCroppedImage();
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "relative",
        height,
        width,
        borderRadius: "12px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Cropper
        image={image}
        crop={crop}
        aspect={aspect}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
      />
    </div>
  );
};

export default ImageCropper;
