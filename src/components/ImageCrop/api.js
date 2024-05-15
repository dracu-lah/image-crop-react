export const UploadImageAPI = (file, onProgress, onLoad, onError) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append('file', file);

    xhr.open('POST', 'https://example.com/upload', true);

    xhr.upload.onprogress = onProgress;

    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(new Error('Upload failed'));
      }
    };

    xhr.onerror = function() {
      reject(new Error('Network error'));
    };

    xhr.send(formData);
  });
}
