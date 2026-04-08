const mongoose=require('mongoose')
const { type } = require('os')
const orderScheme=new mongoose.Schema({
    Eventname:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    Member:{
        type:String,
        required:true
    },
    Decoration:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
  
    
})
const Order=mongoose.model("order",orderScheme);
module.exports=Order