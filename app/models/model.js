

const mongoose= require('mongoose');

// const data= require('../../data');


// mongoose.connect("mongodb://localhost:27017/Pizza-web");
// const data= require('../../data');



const Schema= mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    size:String

})


const Model= mongoose.model( 'pizza-item',Schema);

module.exports= Model;





// Model.create(data);