import { useState } from "react";
import { UploadImageAPI } from "./api";
import { ErrorIcon, LoaderIcon, SuccessIcon, UploadIcon } from "./icons";

const UploadImageButton = ({ file, url }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [disabled, setDisabled] = useState(false)
  console.log('url', url)
  const handleUpload = async (file, url) => {
    try {
      setLoading(true);
      setDisabled(true)
      setError(false); // Reset error state before upload
      setSuccess(false); // Reset success state before upload
      const response = await UploadImageAPI({ file, url });
      setSuccess(true)
    } catch (error) {
      console.error('Upload failed:', error.message);
      setError(true)
      setDisabled(false)
    } finally {
      setLoading(false)
    }
  }
  const backgroundColor = () => {
    if (error) {
      return "#C40C0C"
    }
    else if (success) {
      return "#40A578"
    }
    else {
      return "#31363F"
    }
  }
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
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: backgroundColor(),
        borderRadius: "12px"
      }}

      onClick={() => handleUpload(file, url)}>
      {!error && !loading && !success && <UploadIcon />}
      {success && <SuccessIcon />}
      {loading && <LoaderIcon />}
      {error && <ErrorIcon />}
    </button>
  )
}

export default UploadImageButton

