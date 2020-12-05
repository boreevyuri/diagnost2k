const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const router = express.Router();

// Upload file
router.post('/', upload.any('img'), async (req, res) => {
  res.send(req.files[0].path);
});

module.exports = router;
