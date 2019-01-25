var express = require('express');
var router = express.Router();
var Disk = require('../models/localdisk');

/* GET home page. */
router.get('/', function(req, res, next) {
  Disk(function(diskData){
    res.render('index', {title: "Disk components", disk: diskData})
  });
});

module.exports = router;
