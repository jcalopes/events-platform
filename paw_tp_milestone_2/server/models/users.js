const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['user','promotor','admin'],
        default:'user'
    },
    fname:{
        type:String,
        required:true
    },
    lname: {
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    nif:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model('User', UserSchema);