

const env = require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbstore = require('connect-mongo');
// const body= require('body-parser');
// const quantity= require('./public/Js/app');
// const axios= require('axios');
const bodyParser = require('body-parser');
// console.log(bodyParser);

const Emitter = require('events');


let db_link = 'mongodb+srv://himanshuee20a1358:QYsyZ5hok8cXqzrI@cluster1.iexfzyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

     


  



mongoose.connect(db_link)


const connection = mongoose.connection;

connection.once('open', () => {
     console.log('data base is connected');
})

const expressLayouts = require('express-ejs-layouts');


const app = express();
 
app.use(cookieParser());

const eventEmitter = new Emitter();

app.set('eventEmitter', eventEmitter);

const route = require('./routes/web');







// session configuration
app.use(session({
     secret: process.env.SECRET_KEY,
     cookie: { maxAge: 1000 * 60 * 60 },
     resave: false,
     saveUninitialized: false,
     store: MongoDbstore.create({
          mongoUrl: db_link,
          collection: 'session',
     })

}))


app.use(flash());
app.use(express.static('public'));
// app.use(body.urlencoded({extended:false}));





// Global middle ware
app.use((req, res, next) => {
     res.locals.session = req.session;
     next();
})
  
// set template engine
app.use(expressLayouts);
app.set('views', path.join(__dirname, '/resource/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies



route(app)

app.use((req, res) => {
     res.status(404).render('404_page');
})

 

   

const server = app.listen(600, () => {
     console.log("server   is running port is running ");
})
  


   

const { Server } = require("socket.io");

const io = new Server(server);





eventEmitter.on('updatter', (data) => {

     console.log("this is working");
     console.log(data);
     io.emit('order_linker', data);
})


