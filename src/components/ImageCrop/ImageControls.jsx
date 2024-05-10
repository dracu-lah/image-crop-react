const ImageCancelButton = ({ onClearImage }) => {
  return (
    <div>
      <button
        onClick={onClearImage}
        style={{
          position: "absolute",
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
    </div>
  );
};

export default ImageCancelButton;
