const mongoose = require('mongoose');
var conn=mongoose.Collection;

var userSchema=new mongoose.Schema({

    name:{
        type:String,   
    },
    email:{
        type:String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        index:{
            unique:true,
        }
    },
    dob:{
        type:Date,
    },
    address:{
        type:String,   
    },
    description:{
        type:String,
    },	
	createdAt:{
		type:Date,
		default:Date.now
	},

    
})


var userModal=mongoose.model('user',userSchema,'users');
module.exports=userModal