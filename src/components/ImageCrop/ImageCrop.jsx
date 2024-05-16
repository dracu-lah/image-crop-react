import { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageCropper from "./ImageCropper";
import ImageControls from "./ImageControls";
import CroppedImageContext from "./useCroppedImage";
import { cropImage } from "./cropImage";

const ImageCrop = ({
  url,
  aspect = 4 / 4,
  cropperWidth = "50vw",
  cropperHeight = "50vw",
  uploaderWidth = "50vw",
  uploaderHeight = "50vw",
}) => {
  const [image, setImage] = useState(null);
  const [croppedImageDataURL, setCroppedImageDataURL] = useState(null);
  const onCropComplete = (_, croppedAreaPixels) => {
    const croppedImage = cropImage(image, croppedAreaPixels);
    setCroppedImageDataURL(croppedImage);
  };

  useEffect(() => {
    if (image === null) setCroppedImageDataURL(null);
  }, [image]);
  // Wrap the component with the context provider
  return (
    <CroppedImageContext.Provider
      value={{
        croppedImageDataURL,
        url,
        aspect,
        cropperWidth,
        cropperHeight,
        uploaderWidth,
        uploaderHeight,
      }}
    >
      <div style={{ position: "relative" }}>
        {!image && <ImageUploader onImageSelected={setImage} />}
        {image && (
          <div>
            <ImageControls onClearImage={() => setImage(null)} />
            <ImageCropper image={image} onCropComplete={onCropComplete} />
          </div>
        )}
      </div>
    </CroppedImageContext.Provider>
  );
};

export default ImageCrop;
