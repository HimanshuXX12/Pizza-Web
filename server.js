

const env= require('dotenv').config();
const express= require('express');
const ejs= require('ejs');
const path= require('path');
const mongoose= require('mongoose');
const Model= require('./app/models/model');
const session= require('express-session');
const flash= require('express-flash');
const  MongoDbstore=   require('connect-mongo');
// const body= require('body-parser');
// const quantity= require('./public/Js/app');
// const axios= require('axios');
const bodyParser= require('body-parser');
// console.log(bodyParser);





 





const url= "mongodb://localhost:27017/Pizza-web"

mongoose.connect(url);

const connection= mongoose.connection;

connection.once('open',()=>{
     console.log('data base is connected');
})

const  expressLayouts = require('express-ejs-layouts');


 
const app=  express(); 





const route= require('./routes/web');







// session configuration
app.use(session({
     secret:process.env.SECRET_KEY,
     cookie:{maxAge:1000*60*60},
     resave:false,
     saveUninitialized:false,
     store:MongoDbstore.create({
          mongoUrl:"mongodb://localhost:27017/Pizza-web",
          collection:'session',
     }) 
     
}))


app.use(flash());
app.use(express.static('public'));
// app.use(body.urlencoded({extended:false}));




// Global middle ware
app.use((req,res,next)=>{
     res.locals.session=req.session;
     next();
})

// set template engine
app.use(expressLayouts);
app.set('views', path.join(__dirname,'/resource/views'));
app.set('view engine','ejs');
app.use(bodyParser.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies


//       next();
// })



  

// Model.create(products); 
     
// })


route(app);




// app.post("/update",(req,res)=>{
//        console.log(req.body);
// })

// app.get('/cart',(req,res)=>{
//      res.render('customers/cart')
// }) 


// app.get("/login",(req,res)=>{
//        res.render('auth/Login');
// })



// app.get('/register',(req,res)=>{
//       res.render('auth/register');
// })

   
// app.use((req,res)=>{
//      console.log(req.session.cart);
// })

app.listen(80,"127.0.0.1",()=>{
     console.log("server   is running port is running ");
})   