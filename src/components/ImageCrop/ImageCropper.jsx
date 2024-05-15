import { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "relative",
        height: "50vw",
        width: "50vw",
        borderRadius: "12px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Cropper
        image={image}
        crop={crop}
        aspect={4 / 4}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
      />
    </div>
  );
};

export default ImageCropper;
