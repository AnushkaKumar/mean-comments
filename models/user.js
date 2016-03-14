var mongoose =require('mongoose');
var UserSchema=new mongoose.Schema(
    	email:{type:String,unique:true},
    	password:{type:String},
        name:{type:String}
	});
module.exports=mongoose.model('User',UserSchema);