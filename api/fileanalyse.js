const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({
  dest: 'uploads/' // this saves your file into a directory called "uploads"
});

router.post('/', upload.single('upfile'), function (req, res, next) {
  console.log(req.body);
   res.send(req)
  })

module.exports = router;