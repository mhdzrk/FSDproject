const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopezydb');
const Schema = mongoose.Schema;

var NewUserSchema=new Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    phone:Number,
    cart:Array
    
});

var Userdata = mongoose.model('shopinguser',NewUserSchema);

module.exports=Userdata;
