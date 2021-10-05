const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://pepperfry:JKoHc0lGgb5oLe0g@cluster0.p0kzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
        useNewUrlParser :true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify : false
    })
}

module.exports = connect