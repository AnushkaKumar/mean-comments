var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('comments',{'req':req});
});
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
