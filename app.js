const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')
const indexRouter=require('./router/Index');
const userRouter=require('./router/user');
const app=express();
// setting db
require('./config/db')();
// setting view engine
app.set('view engine','pug');
app.set('views','views');
app.use(express.static(path.join(__dirname,'public')));

// setting body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// setting router
app.use('/',indexRouter);
app.use('/',userRouter);
// setting serb\ver
const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`Server working with ${port}`)})