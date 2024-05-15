import { useState } from "react";
import { UploadImageAPI } from "./api";
import { ErrorIcon, LoaderIcon, SuccessIcon, UploadIcon } from "./icons";

const UploadImageButton = ({ file }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sucess, setSucess] = useState(false)
  const handleFileUpload = async (file) => {
    try {
      const response = await UploadImageAPI(
        file,
        (event) => {
          // Progress update
          console.log('Progress:', event.loaded / event.total);
        },
        () => {
          // Load event
          console.log('Upload complete');
        },
        (error) => {
          // Error event
          console.error('Upload failed:', error.message);
          setError(true)
        }
      );
      console.log('Upload successful:', response);
    } catch (error) {
      console.error('Upload failed:', error.message);
    }
  };
  return (
    <button
      style={{
        right: 10,
        bottom: 10,
        position: "absolute",
        zIndex: 20,
        border: "none",
        width: "42px",
        height: "42px",
        color: "white",
        cursor: "pointer",
        backgroundColor: "#31363F",
        borderRadius: "12px"
      }}

      onClick={() => handleFileUpload(file)}>
      <UploadIcon />
      {sucess && <SuccessIcon />}
      {loading && <LoaderIcon />}
      {error && <ErrorIcon />}
    </button>
  )
}

export default UploadImageButton

