var mongoose =require('mongoose');
var UserSchema=new mongoose.Schema(
    	email:{type:String,unique:true},
    	password:{type:String},
        name:{type:String}
	});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
	console.log(password)
	console.log(this)
	
    return bcrypt.compareSync(password, this.password);
};
module.exports=mongoose.model('User',UserSchema);