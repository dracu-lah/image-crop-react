import React from "react";

const ImageControls = ({ onClearImage, onUpdate }) => {
  return (
    <div>
      <button onClick={onClearImage}>Clear Image</button>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
};

export default ImageControls;
