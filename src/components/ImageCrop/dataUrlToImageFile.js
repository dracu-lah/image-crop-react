// Function to convert Data Url to Image File
export const dataUrlToImageFile = ({ croppedImageDataURL, imageName }) => {
  if (croppedImageDataURL) {
    // Convert base64 to Blob
    const byteCharacters = atob(croppedImageDataURL.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });
    const file = new File([blob], `${imageName}.jpg`, { type: "image/jpeg" });

    return file;
  }

  return null;
};
