

const express= require('express');
const ejs= require('ejs');
const path= require('path');



const  expressLayouts = require('express-ejs-layouts')

const app=  express();





app.set('views', path.join(__dirname,'/resource/views'));
app.use(expressLayouts);

app.use(express.static('public'));

app.set('view engine','ejs');
 
app.get("/",(req,res)=>{
     res.render('home');
   
     
})


app.get('/cart',(req,res)=>{
     res.render('customers/cart')
})


app.get("/login",(req,res)=>{
       res.render('auth/Login');
})



app.get('/register',(req,res)=>{
      res.render('auth/register');
})


app.listen(80,"127.0.0.1",()=>{
     console.log("server   is running port is running ");
})