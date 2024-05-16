const DropZone = ({ onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        onDrop(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p
        style={{
          fontFamily: "monospace",
          fontSize: "1.2rem",
          opacity: 0.4,
          fontWeight: "bold",
          userSelect: "none",
        }}
      >
        Drag & Drop Image or&nbsp;
        <span style={{ textDecoration: "underline" }}>Browse</span>
      </p>
    </div>
  );
};

export default DropZone;
