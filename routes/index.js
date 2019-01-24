var express = require('express');
var router = express.Router();
var Disk = require('../models/localdisk');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {disk: Disk});
});

module.exports = router;
