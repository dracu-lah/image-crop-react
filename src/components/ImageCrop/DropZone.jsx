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
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      <p>Drag & drop image here</p>
    </div>
  );
};

export default DropZone;
