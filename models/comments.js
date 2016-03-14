var mongoose =require('mongoose');
var CommentSchema=new mongoose.Schema(
    	owner:{type:String,unique:true},
    	info:{type:String},
        upvote:[{ type : ObjectId}],
        downvote:[{ type : ObjectId]
	});
module.exports=mongoose.model('Comments',CommentSchema);