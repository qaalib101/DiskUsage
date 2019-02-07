var express = require('express');
var router = express.Router();
var Disk = require('../models/localdisk');
var dirname = process.env.SystemDrive;
/* GET home page. */
router.get('/', function(req, res, next) {
  Disk(function(err, diskData){
    if(err) {
      console.log(err);
      res.render('error', {error: err});
    }
    else{
      res.render('index', {title: "Disk components", disk: diskData});
    }
  }, dirname);
});
// used to get disk data if requested by a ajax call
router.get('/getDiskData', function(req, res, next){
  Disk(function(err, diskData){
    res.json(diskData);
  }, dirname)
});

module.exports = router;
