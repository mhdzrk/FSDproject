const express = require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bodyparser=require('body-parser');
const ownerdata= require('../models/ownerdata');
ownerRouter=express.Router();
ownerRouter.use(bodyparser.json());
const userData=require('../models/userData');




ownerRouter.get('/',(req,res)=>{
    res.send('api works');
})
ownerRouter.post('/signup',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    item=req.body
    console.log(item);
    user=ownerdata(item);
    user.save((error,user)=>{
        if(error){
            console.log(error)
        }else{
            let payload={subject:user._id}
            let token =jwt.sign(payload,'secretKey')
            res.status(200).send({user,token});
        }
    });
})

ownerRouter.post('/login',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    let item = req.body;
    ownerdata.findOne({username:item.username},(error,user)=>{
        if (error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('invalid username')
            }
            else
            if(user.password!==item.password){
                res.status(401).send("invalid password")
            }else{
                let payload={subject:user._id}
                let token =jwt.sign(payload,'secretKey')
                res.status(200).send({user,token})
            }

        } 
            

    })
    
})

module.exports=ownerRouter;