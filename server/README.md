# File Upload CRUD Backend

This is the backend of a simple CRUD (Create, Read, Update, Delete) application built using Node.js with Express. It provides API endpoints for uploading files, retrieving a list of uploaded files, and deleting files.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/file-upload-crud.git
cd file-upload-crud
```

2. Install dependencies:

```bash
cd backend
npm install
```

## Usage

Start the backend server:

```bash
node server.js
```

The server will start running on http://localhost:5000 by default.

## Routes

### File Upload Route:
- **Method:** POST
- **URL:** `/upload`
- **Description:** Uploads a single file to the server.
- **Request Body:** Form data with a field named "file" containing the file to be uploaded.
- **Response:** JSON object containing the filename of the uploaded file.

### Get Files Route:
- **Method:** GET
- **URL:** `/files`
- **Description:** Retrieves a list of filenames for all files stored on the server.
- **Response:** JSON array containing the filenames of all files stored on the server.

### Delete File Route:
- **Method:** DELETE
- **URL:** `/file/:filename`
- **Description:** Deletes the specified file from the server.
- **URL Parameters:**
  - `filename`: The filename of the file to be deleted.
- **Response:** JSON object indicating whether the deletion was successful.

## Technologies Used

- Node.js
- Express
- Multer

## Folder Structure

- **backend:** Contains the Node.js backend code.

## Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

