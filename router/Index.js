const express=require('express');
const router=express.Router();
const Person=require('../model/Person')
    // Metod GET 
    
router.get('/',(req,res)=>{
    const page=parseInt(req.query.page);
    const count=parseInt(req.query.count);
   Person.find({},(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('index',{title:"index",result,count})
        }
    })
    .skip((page-1)*count)
    .limit(count)
})
    // Metod POST
router.post('/',(req,res,next)=>{
    const person=new Person(req.body)
    person.save()
    .then(()=>{
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
})



module.exports=router;