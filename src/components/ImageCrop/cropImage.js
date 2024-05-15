
export const cropImage = (image, croppedAreaPixels) => {
  if (image && croppedAreaPixels) {
    const canvas = document.createElement("canvas");
    const imageElement = document.createElement("img");
    imageElement.src = image;

    const scaleX = imageElement.naturalWidth / imageElement.width;
    const scaleY = imageElement.naturalHeight / imageElement.height;

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      imageElement,
      croppedAreaPixels.x * scaleX,
      croppedAreaPixels.y * scaleY,
      croppedAreaPixels.width * scaleX,
      croppedAreaPixels.height * scaleY,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
    );

    return canvas.toDataURL("image/jpeg")
  }
};
