import ImageCrop from "./components/ImageCrop/ImageCrop";

const App = () => {
  const ImageUploadURL = "http://localhost:5000/upload"
  return (
    <div>
      <ImageCrop url={ImageUploadURL} />
    </div>
  );
};

export default App;
