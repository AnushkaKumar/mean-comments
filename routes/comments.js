var express = require('express');
var router = express.Router();
var UserSchema=require('../models/user.js');
var CommentSchema=require('../models/comments.js');
/* GET home page. */


function callBack(allComments,i,req,res){
	console.log("here",allComments);
	if(i<allComments.length){
	 		UserSchema.findOne({_id:allComments[i].owner},function(err,user){
	 			allComments[i].user = user;
	 			callBack(allComments,i+1,req,res);
	 		})
	 	}else{
			res.render('comments',{'req':req,'comments':allComments});
	 	}
}
router.get('/', function(req, res, next) {

	 CommentSchema.find({}, function (err, allComments) {
		console.log(allComments);
		callBack(allComments,0,req,res);
	 });
  
});

router.post('/',function(req,res,next){
	var comment = new CommentSchema({
		info:req.body.info,
		owner:req.user._id,
		upvotes:[],
		downvotes:[]
	})
	comment.save(function(err){
		if(!err){
			res.redirect('/comments');
		}else{
			throw err;
		}
	})
})

router.get('/upvote',function(req,res,next){
	id = req.query.id
	CommentSchema.findOne({_id:id},function(err,comment){
		userid = req.user._id
		if(comment.upvote.indexOf(userid)>-1){
			res.redirect('/comments');
		}else{
			dId = comment.downvote.indexOf(userid);
			if(dId>-1){
				comment.downvote.splice(dId,1);
			}
			comment.upvote.push(userid)
			comment.save(function(err){
				if(!err){
					res.redirect('/comments');
				}else{
					throw err;
				}
			})
		}
	})
})

router.get('/downvote',function(req,res,next){
	id = req.query.id
	CommentSchema.findOne({_id:id},function(err,comment){
		userid = req.user._id
		if(comment.downvote.indexOf(userid)>-1){
			res.redirect('/comments');
		}else{
			dId = comment.upvote.indexOf(userid)
			if(dId>-1){
				comment.upvote.splice(dId,1);
			}
			comment.downvote.push(userid)
			comment.save(function(err){
				if(!err){
					res.redirect('/comments');
				}else{
					throw err;
				}
			})
		}
	})
})
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
