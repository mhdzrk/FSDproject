const express = require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const app=new express();
const userRouter=require('./src/Routes/shoppingUser');
const ownerRouter=require('./src/Routes/shopowners');
const pRouter=require('./src/Routes/products');
const oRouter=require('./src/Routes/orders');
app.use(cors());
app.use(bodyparser.json());
app.use('/user',userRouter);
app.use('/owner',ownerRouter);
app.use('/products',pRouter);
app.use('/orders',oRouter);

app.get('/',(req,res)=>{
    res.send('app works');
})


app.listen(3000)

