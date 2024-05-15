import React from "react";

const ImageUploader = ({ onImageSelected }) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageSelected(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return <input type="file" onChange={handleFileChange} />;
};

export default ImageUploader;
