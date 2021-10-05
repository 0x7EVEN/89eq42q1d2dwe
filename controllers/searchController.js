const express = require("express");

const router = express.Router();

const Product = require("../models/productModel");


router.get("/:q", async function(req, res) {
     console.log("request here with", req.params.q);
     try {
          const q = await Product.find({
               $text: {$search: req.params.q}
          }).lean().exec();
          console.log(q);
          return res.send(q);
     } catch (err) {
          res.send(err);
     }
});

router.get("/:c/:q", async function(req, res) {
     console.log("request here with", req.params.q);
     // const key = new RegExp(req.params.c, "ig");
     const reg = new RegExp(req.params.q, "ig");
     console.log({[req.params.c]: req.params.q});
     try {
          const q = await Product.find({[req.params.c]: reg}).lean().exec();
          console.log(q);
          return res.send(q);
     } catch (err) {
          res.send(err);
     }
});
module.exports = router;