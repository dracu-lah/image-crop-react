import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Cropper from "react-easy-crop";
import { useMutation } from "@tanstack/react-query";
import { base64ToImg } from "@/utils/base64ToImg";
import { useQueryClient } from "@tanstack/react-query";
import "./index.css";
import notificationHelpers from "@/utils/notification";
import { UploadGroupProfileImage, UploadProfileImage } from "@/utils/api";

const ProfileUploadModal = ({
  showProfileModal,
  setShowProfileModal,
  group = false,
  group_id,
}) => {
  const queryClient = useQueryClient();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const mutation = useMutation({
    mutationFn: group ? UploadGroupProfileImage : UploadProfileImage,
    onSuccess: (response) => {
      if (response.status) {
        notificationHelpers.success(response.message);
        setShowProfileModal(false);
        const queryString = group ? "groupData" : "userData";
        queryClient.invalidateQueries([queryString, "ProfileDetails"]);
      } else {
        notificationHelpers.error(response.message);
      }
    },
    onError: ({ response }) => {
      notificationHelpers.error(response.data.message);
    },
  });

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    cropImage(croppedAreaPixels);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setImage(null);
    setCroppedImage(null);
  };

  const cropImage = async (croppedAreaPixels) => {
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

      const croppedImageDataURL = canvas.toDataURL("image/jpeg");
      setCroppedImage(croppedImageDataURL);
    }
  };

  const handleProfileUpload = () => {
    const profileData = base64ToImg(
      croppedImage,
      `${group ? "group-" : ""}profile-image`,
    );

    if (group) {
      profileData.append("group_id", group_id);
    }
    mutation.mutate(profileData);
  };

  return (
    <Modal
      show={showProfileModal}
      onHide={() => setShowProfileModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Upload{group && " Group"} Profile Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="upload-container">
          {!image && (
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select an image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          )}
          {image && (
            <div>
              <Button variant="danger" className="mb-3" onClick={clearImage}>
                Clear Image
              </Button>
              <div className="cropper-container my-4">
                <Cropper
                  image={image}
                  crop={crop}
                  aspect={4 / 4}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                />
              </div>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowProfileModal(false)}>
          Close
        </Button>
        {image && (
          <Button
            variant="success"
            onClick={handleProfileUpload}
            disabled={mutation.status === "pending"}
          >
            {mutation.status === "pending" ? "Updating..." : "Update"}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileUploadModal;
