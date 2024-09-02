const mongoose = require('mongoose');
require('dotenv').config();
// const mongoUrl = 'mongodb://localhost:27017/hotels';
// const mongoUrl = 'mongodb+srv://mh7349235:33758040@cluster0.smmkt.mongodb.net/';
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("Connected to MongoDB");
})
db.on("error",()=>{
    console.log("error");
})
db.on("disconnected",()=>{
    console.log("DisConnected to MongoDB");
})
module.exports = db;