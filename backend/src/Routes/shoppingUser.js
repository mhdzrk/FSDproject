const express = require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bodyparser=require('body-parser');
userRouter=express.Router();
userRouter.use(bodyparser.json());
const userData=require('../models/userData');



userRouter.get('/',(req,res)=>{
    res.send('api works');
})
userRouter.post('/signup',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    item=req.body
    console.log(item);
    user=userData(item);
    user.save((error,user)=>{
        if(error){
            console.log(error)
        }else{
            
            let payload={subject:user._id}
            let token =jwt.sign(payload,'secretKey')
            res.status(200).send({user,token})        }
    });
})

userRouter.post('/login',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    let item = req.body;
    userData.findOne({username:item.username},(error,user)=>{
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
userRouter.put('/push/:id',(req,res)=>{
    const id=req.params.id
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    productId=req.body;
    userData.findOneAndUpdate({_id:id},{$push:{cart:productId}})
    .then(function(user){
        console.log(user)
        user.save();
        res.send("successfully added to cart")
    })
})

userRouter.put('/pull/:id',(req,res)=>{
    const id=req.params.id
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    product=req.body;
    userData.findOneAndUpdate({_id:id},{$pull:{cart:product}})
    .then(function(user){
        console.log(user)
        user.save();
        res.status(200).send("successfully added to cart")
    })
})




userRouter.get('/get/:id',(req,res)=>{
    id=req.params.id
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(id);
    userData.findOne({_id:id})
    .then(function(user){
        console.log(user);
        res.status(200).send(user);
    })
})

userRouter.get('/getto/:id',(req,res)=>{
    id=req.params.id
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(id);
    userData.findOne({_id:id})
    .then(function(user){
        console.log(user);
        res.status(200).send(user);
    })
})

module.exports=userRouter;
