const mongoose=require('mongoose');
const db=mongoose.connection;
module.exports=()=>{
    mongoose.connect('mongodb://localhost:27017/pagination',{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    db.on('error',(err)=>{
        console.log(err);
    })
    db.on('open',()=>{
        console.log("localhost:27017 connected");
    })
}