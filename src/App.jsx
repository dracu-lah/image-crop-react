import ImageCrop from "./components/ImageCrop/ImageCrop";

const App = () => {
  const ImageUploadURL = "http://localhost:5000/upload";
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageCrop url={ImageUploadURL} />
    </div>
  );
};

export default App;
