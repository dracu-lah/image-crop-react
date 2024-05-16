import ImageCrop from "./components/ImageCrop/ImageCrop";
import ImageList from "./components/ImageList/ImageList";

const App = () => {
  const ImageUploadURL = "http://localhost:5000/upload";
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <ImageCrop url={ImageUploadURL} />
      <ImageList />
    </div>
  );
};

export default App;
