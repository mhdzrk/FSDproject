const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopezydb');
const Schema = mongoose.Schema;

var NewUserSchema=new Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    phone:Number,
    cart:Array,
    

});

var Orderdata = mongoose.model('order',NewUserSchema);
module.exports=Orderdata;