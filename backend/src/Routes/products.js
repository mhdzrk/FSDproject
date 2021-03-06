const express = require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bodyparser=require('body-parser');
const productdata=require('../models/productdata')
pRouter=express.Router();
pRouter.use(bodyparser.json());

pRouter.get('/',function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    productdata.find().then(function(products){
        res.send(products)
    })

})
pRouter.get('/grocery',function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    productdata.find({productCategory:'grocery'}).then(function(products){
        res.send(products)
    })

})

pRouter.get('/fashion',function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    productdata.find({productCategory:'fashion'}).then(function(products){
        res.send(products)
    })

})

pRouter.get('/electronics',function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    productdata.find({productCategory:'electronics'}).then(function(products){
        res.send(products)
    })

})

pRouter.post('/add', function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    let item = req.body;
    product=productdata(item);
    product.save()
    res.send("successfully added new product");
})

pRouter.delete('/delete/:id',function(req,res){
    id=req.params.id
    if(mongoose.isValidObjectId(id)){
    console.log(id);
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    productdata.findByIdAndRemove(id,(err,doc)=>{
        if(err){res.send(err)}
        else{res.send(doc)}
    });

    }
    else{
        return res.send('invalid object id')
    }
})

pRouter.get('/:id',function(req,res){
    id=req.params.id
    if(mongoose.isValidObjectId(id)){
        res.header("Acess-Control-Allow-Origin","*")
        res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
        productdata.findById(id).then(function(product){
            res.send(product)
        })
    }
    else{
        res.send('invalid product');
    }

})

pRouter.put('/edit/:id',function(req,res){
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    id=req.params.id
    console.log(req.body);
    item={
        productId:req.body.productId,
        productName:req.body.productName,
        productCategory:req.body.productCategory,
        productCode:req.body.productCode,
        releaseDate:req.body.releaseDate,
        description:req.body.description,
        price:req.body.price,
        starRating:req.body.starRating,
        imageUrl:req.body.imageUrl
    }
    
    if(item.productId!=null){
        productdata.findOneAndUpdate({_id:id},{"$set":{productId:item.productId}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    
    }
    if(item.productName!=null){
        productdata.findOneAndUpdate({_id:id},{"$set":{productName:item.productName}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    }
    if(item.productCategory!=null){
        productdata.findOneAndUpdate({_id:id},{"$set":{productCategory:item.productCategory}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    }
    if(item.productCode!==null){
        productdata.findOneAndUpdate({_id:id},{"$set":{productCode:item.productCode}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    }
    if(item.releaseDate!==null){
        productdata.findOneAndUpdate({_id:id},{"$set":{releaseDate:item.releaseDate}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    }
    if(item.description!==null){
        productdata.findOneAndUpdate({_id:id},{"$set":{description:item.description}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    }
    if(item.starRating!==null){
        productdata.findOneAndUpdate({_id:id},{"$set":{starRating:item.starRating}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    }
    if(item.imageUrl!==null){
        productdata.findOneAndUpdate({_id:id},{"$set":{imageUrl:item.imageUrl}})
        .then(function(product){
            product.save()
            res.send("successfully updated")
        })
    }
    

    

})

module.exports=pRouter;