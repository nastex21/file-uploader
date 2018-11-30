const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer()

router.post('/', upload.none(), function (req, res, next) {
    console.log(req.body)
  })

module.exports = router;