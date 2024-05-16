const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// File storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ filename: req.file.filename });
});

app.get("/files", (req, res) => {
  fs.readdir("uploads/", (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const fileUrls = files.map(
      (file) => `http://localhost:${PORT}/uploads/${file}`,
    );
    res.json(fileUrls);
  });
});

app.delete("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  fs.unlink(`uploads/${filename}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
