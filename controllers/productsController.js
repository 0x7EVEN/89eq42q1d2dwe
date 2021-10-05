const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const Product = require("../models/productModel");

router.post("/",async(req,res)=>{
    try{
        const product = await Product.create(req.body);

        console.log(product)
        res.send(product)
    }
    catch(err){
        res.send(err)
    }
})

router.get("/",async(req,res)=>{
    try{
        const product = await Product.find().lean().exec();

        res.send(product)
    }
    catch(err){
        res.send(err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.send(product)
    }
    catch(err){
        res.send(err)
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        
        res.send(product)
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router;