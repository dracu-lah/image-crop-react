import UploadImageButton from "./UploadImageButton";

const ImageControls = ({ image, onClearImage, url }) => {
  return (
    <div>
      <button
        onClick={onClearImage}
        style={{
          position: "absolute",
          cursor: "pointer",
          zIndex: 20,
          border: "none",
          width: "32px",
          height: "32px",
          color: "white",
          backgroundColor: "#C40C0C",
        }}
      >
        x
      </button>
      <UploadImageButton file={image} url={url} />
    </div>
  );
};

export default ImageControls;
