var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

router.post('/')