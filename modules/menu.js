const mongoose = require('mongoose');

const menu = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:["saucy","sweet","sour"],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:["string"],
        default:[],
    },
    num_of_sales:{
        type:Number,
        default:0,
    }
})
const menuSchema = mongoose.model("Menu",menu);
module.exports = menuSchema;