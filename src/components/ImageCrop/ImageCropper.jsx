import { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({ image, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  return (<div
    style={{ position: "relative", padding: "16vh", boxSizing: "border-box" }}
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
