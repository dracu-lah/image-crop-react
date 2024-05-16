const ImageCard = ({ image, index, getImages }) => {
  const handleDelete = async () => {
    try {
      const filePath = image.replace("uploads", "file");

      const response = await fetch(filePath, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Failed to delete image: ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Delete successful:", result);
      getImages();
    } catch (error) {
      console.error("ERR DELETE:", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleDelete}
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
      <img
        src={image}
        alt={`image-${index}`}
        style={{ width: "80px", height: "80px", borderRadius: "12px" }}
      />
    </div>
  );
};

export default ImageCard;
