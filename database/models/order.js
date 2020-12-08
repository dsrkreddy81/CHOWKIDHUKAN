const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let order = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

order = mongoose.model("orders", order);
module.exports = order;