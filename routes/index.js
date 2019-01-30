var express = require('express');
var router = express.Router();
var Disk = require('../models/localdisk');
var dirname = 'C';
var filesSize = require('filesize');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  Disk(function(err, diskData){
    if(err){
      res.render('error', {error: err})
    }else{
      res.render('index', {title: "Disk components", disk: diskData});
    }
  });
});
router.get('/getDiskData', function(req, res, next){
  Disk(function(err, diskData){
    res.json(diskData);
    console.log(diskData)
  }, dirname)
});
router.post('/getDir', function(req, res, next){
  console.log(req.body.files);

});

module.exports = router;
