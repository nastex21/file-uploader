'use strict';
var express = require('express');
var cors = require('cors');
var fileAnalyze = require('./api/fileanalyse')
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.use('/api/fileanalyse', fileAnalyze);

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
