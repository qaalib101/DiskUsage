var express = require('express');
var router = express.Router();
var Disk = require('../models/localdisk');
var dirname = 'C';
var topFiles;
var polls = [
  {
    id:     1,
    name:   "Will the Warriors win the NBA championship?",
    is_featured: true
  },
  {
    id:     2,
    name:   "Will Trump win the GOP nomination?",
    is_featured: false
  }
]
console.dir(polls);
/* GET home page. */
router.get('/', function(req, res, next) {
  Disk(function(err, diskData){
    if(err){
      res.render('error', {error: err})
    }else if(topFiles){
      console.log(topFiles);
      res.render('index', {title: "Disk components", disk: diskData, objects: topFiles});
    }
    else{
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
  topFiles = req.body;
  res.redirect('/');
});

module.exports = router;
