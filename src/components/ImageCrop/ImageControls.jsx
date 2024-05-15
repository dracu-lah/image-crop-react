import UploadImageButton from "./UploadImageButton";

const ImageControls = ({ onClearImage }) => {
  return (
    <div>
      <button
        onClick={onClearImage}
        style={{
          borderRadius: "100%",
          position: "absolute",
          cursor: "pointer",
          zIndex: 20,
          border: "none",
          width: "32px",
          height: "32px",
          color: "white",
          backgroundColor: "#C40C0C",
          left: "-10px",
          top: "-10px",
          fontWeight: "bold",
        }}
      >
        X
      </button>
      <UploadImageButton onClearImage={onClearImage} />
    </div>
  );
};

export default ImageControls;
