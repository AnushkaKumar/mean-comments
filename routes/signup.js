var express = require('express');
var router = express.Router();
var UserSchema=require('../models/user.js');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('registration');
// });
module.exports=function(passport){
	router.get('/',function(req,res){
		res.render('signup.ejs',{'req':req,'signupMessage': req.flash('signupMessage')});
	});
	router.post('/', passport.authenticate('local-signup', {
	        successRedirect : '/comments', // redirect to the secure profile section
	        failureRedirect : '/signup', // redirect back to the signup page if there is an error
	        failureFlash : true // allow flash messages
	}));
	return router;
};
