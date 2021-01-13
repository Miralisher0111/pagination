const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const person=new Schema({
    name:{
    type:String,
    default:"noname",
    required:true,

    },
    surname:{
    type:String,
    default:"noname",
    required:true,

    },
    age:{
    type:Number,
    default:21,
    required:true,

    }
})

module.exports=mongoose.model('person',person)