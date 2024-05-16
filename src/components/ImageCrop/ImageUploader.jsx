import { useRef } from "react";
import DropZone from "./DropZone";
import { useCroppedImage } from "./useCroppedImage";

const ImageUploader = ({ onImageSelected }) => {
  const { uploaderWidth: width, uploaderHeight: height } = useCroppedImage();
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageSelected(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <div
      style={{
        overflow: "hidden",
        background: "#EEEDEB",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width,
        height,
      }}
      onClick={openFileDialog}
    >
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <DropZone onDrop={onImageSelected} />
    </div>
  );
};

export default ImageUploader;
