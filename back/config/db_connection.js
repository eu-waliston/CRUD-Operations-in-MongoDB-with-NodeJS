
var mongoose = require('mongoose');
require("dotenv").config();

//Set up default mongoose connection
let con = "mongodb://127.0.0.1:27017/"
let prod = "mongodb+srv://we:4002892233513341@cluster0.sdsh59o.mongodb.net/"
var mongoDB = prod;
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", () => {
    console.log("Successfully Connected");
})