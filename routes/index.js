var express = require('express');
var router = express.Router();
var diskspace = require('diskspace');

/* GET home page. */
router.get('/', function(req, res, next) {
  diskspace.check('c', );
  res.render('index', { title: 'Express' });
});

module.exports = router;
