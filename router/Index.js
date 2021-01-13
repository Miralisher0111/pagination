const express=require('express');
const router=express.Router();
const Person=require('../model/Person')

router.get('/index',(req,res)=>{
    const page=parseInt(req.query.page);
    const count=parseInt(req.query.count);
   Person.find({},(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(count);
            // console.log(page);
            const count=result.length
            res.render('index',{title:"index",result,count})
        }
    })
    .skip((page-1)*count)
    .limit(count)
})
router.post('/index',(req,res,next)=>{
    
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