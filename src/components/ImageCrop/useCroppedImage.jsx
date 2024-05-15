
import { createContext, useContext } from "react";

// Create a context to manage the cropped image data URL
const CroppedImageContext = createContext();

// Custom hook to access the cropped image data URL from other components
export const useCroppedImage = () => useContext(CroppedImageContext);

export default CroppedImageContext;
