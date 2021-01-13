const express=require('express');
const router=express.Router();

router.get('/users',(req,res,next)=>{
    res.send("Lorem ipsum dolor set amit.....")
})

module.exports=router