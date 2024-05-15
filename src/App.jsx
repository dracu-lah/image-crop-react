import ImageCrop from "./components/ImageCrop/ImageCrop";

const App = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageCrop />
    </div>
  );
};

export default App;
