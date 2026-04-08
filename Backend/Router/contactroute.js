const express=require("express")
const router=express.Router()
const contoller=require('../Controllers/Contactcontollers');
 router.post('/user/contact',contoller.controlcontact)
 router.get('/user/getcontact',contoller.getcontact)

 module.exports=router;