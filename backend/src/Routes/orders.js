const express = require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bodyparser=require('body-parser');
const orderData=require('../models/orderdata');
const bodyParser = require('body-parser');
orderRouter=express.Router();
orderRouter.use(bodyparser.json());

    


orderRouter.get('/shipment',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    orderData.find()
    .then(function(item){
        console.log(item)
        res.status(200).send(item)
    })

    
})

orderRouter.post('/checkout',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    item=req.body
    console.log(item);
    user=orderData(item);
    user.save((error,user)=>{
        if(error){
            console.log(error)
        }else{
            
            res.status(200).send(user);
        }
    });
})
orderRouter.get('/shipment/:id',(req,res)=>{
    id=req.params.id
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    orderData.findOne({_id:id})
    .then(function(item){
        console.log(item)
        res.status(200).send(item)
    })

    
})
module.exports=orderRouter;