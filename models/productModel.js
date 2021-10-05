

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {type:String , required : true},
    oriPrice : {type:Number , required : true},
    disPrice : {type : Number , required: true},
    percentage : {type : Number ,required : true},
    brand : {type:String , required:true},
    category: {type:String , required:true},
    colorImage : [{color : {type : String ,required : false},images :[{type : String ,required : false}]}],
    extra : [{
        data: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: false,
        }
      }],
    details : {
        Brand : {type : String ,required : false},
        Dimensions : [{type : Number ,required : false}],
        Weight : {type : Number ,required : false},
        Waranty : {type : Number ,required : false},
        Assembly : {type : String ,required : false},
        Primary_Material : {type : String ,required : false},
        Room_Type : {type : String ,required : false},
        Seating_Height : {type : Number ,required : false},
        Colour : {type : String ,required : false}
    },
    emi : {type : String ,required : false}
},{
    versionKey : false,
    timestamps : true
});

const Product = new mongoose.model("product",productSchema);

module.exports = Product;