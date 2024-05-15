import { useRef } from "react";
import DropZone from "./DropZone";

const ImageUploader = ({ onImageSelected }) => {
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
        border: "2px dashed #ccc",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "50vw",
        height: "50vw",
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
