const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['waiter','chef','manager'],

    },
    mobile:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        trim:true,
    },
    address:{
        type:String,

    },
    salary:{
        type:Number,
    },
})
const Person = mongoose.model('Person',PersonSchema);
module.exports = Person;