const mongoose=require('mongoose')
const { type } = require('os')
const contactScheme=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    
})
const Contact=mongoose.model("contact",contactScheme);
module.exports=Contact;