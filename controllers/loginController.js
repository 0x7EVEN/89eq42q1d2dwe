const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const User = require("../models/userModel");


router.post("/", async function(req, res) {
     console.log(req.body)
     try {
          const user = await User.find({$and: [{email: req.body.email}, {password: req.body.password}]});
          if (user) {
               res.send([user[0]._id,user[0].name]);
          }
          console.log(user);
     } catch (err) {
          res.send(err);
     }
});

router.get("/", async function(req, res) {
    console.log(req.body)
    try {
         const user = await User.find().lean().exec();
    
              res.send(user);
         
    } catch (err) {
         res.send(err);
    }
});


module.exports = router;
