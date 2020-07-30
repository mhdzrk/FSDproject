const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopezydb');
const Schema = mongoose.Schema;

var NewUserSchema=new Schema({
    shopname:String,
    shopemail:String,
    username:String,
    password:String,
    phone:Number
    
});

var Ownerdata = mongoose.model('owneruser',NewUserSchema);
module.exports=Ownerdata;