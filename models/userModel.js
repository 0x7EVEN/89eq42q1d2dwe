
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type:String , required : true},
    email : {type : String , required: true},
    password : {type : String , required: true},
    mobile : {type : Number , required: true},
    cart : [{
        data : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required: false,
        },
        quantity : {type : Number , required: false},
        tracking : {type : String , required: false}
    }],
    address : {type : String , required: false},
    token : {type : String , required: false},
    fb : {type : String , required: false},
    google : {type : String , required: false}
},{
    versionKey : false
});


const User = new mongoose.model("user",userSchema);

module.exports = User;