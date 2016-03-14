var mongoose =require('mongoose');
var CommentSchema=new mongoose.Schema({
    	owner:{type:String},
    	info:{type:String},
        upvote:[{ type : mongoose.Schema.Types.ObjectId}],
        downvote:[{ type : mongoose.Schema.Types.ObjectId}]
	});
module.exports=mongoose.model('Comments',CommentSchema);