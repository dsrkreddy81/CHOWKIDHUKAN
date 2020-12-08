const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let cart = new Schema({
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
    }
});

cart = mongoose.model("carts", cart);
module.exports = cart;