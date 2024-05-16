# ImageCrop Component

## Description

The `ImageCrop` component is a React component that provides an easy-to-use image cropping and uploading interface. It leverages the `react-easy-crop` library to handle the cropping functionality. The component is customizable, allowing you to set the aspect ratio, cropper dimensions, and uploader dimensions.

## Installation

To use the `ImageCrop` component in your project, you need to install the following dependencies:

```bash
npm install react react-dom react-easy-crop
```

## Usage

### Importing the Component

First, import the `ImageCrop` component into your React application:

```jsx
import React from "react";
import ImageCrop from "./ImageCrop"; // Adjust the path according to your project structure
```

### Component Props

The `ImageCrop` component accepts the following props:

- `url` (string): The URL of the image to be cropped.
- `aspect` (number): The aspect ratio of the crop area. Default is `1` (square aspect ratio).
- `cropperWidth` (string): The width of the cropper area. Default is `"50vw"`.
- `cropperHeight` (string): The height of the cropper area. Default is `"50vw"`.
- `uploaderWidth` (string): The width of the uploader area. Default is `"50vw"`.
- `uploaderHeight` (string): The height of the uploader area. Default is `"50vw"`.

### Example

Here is an example of how to use the `ImageCrop` component:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import ImageCrop from "./ImageCrop";

const App = () => {
  return (
    <div>
      <h1>Image Cropper Example</h1>
      <ImageCrop
        url="https://example.com/path/to/your/image.jpg"
        aspect={16 / 9}
        cropperWidth="70vw"
        cropperHeight="40vw"
        uploaderWidth="70vw"
        uploaderHeight="40vw"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```
