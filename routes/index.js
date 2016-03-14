var express = require('express');
var router = express.Router();
var UserSchema=require('../models/user.js');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('registration');
// });
module.exports=function(passport){
	router.get('/',function(req,res){
		res.render('login.ejs',{'req':req, 'loginMessage': req.flash('loginMessage')});
	});
	router.post('/', passport.authenticate('local-login', {
        successRedirect : '/comments', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
	return router;
};

