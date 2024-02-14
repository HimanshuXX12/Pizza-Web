

const mongoose= require('mongoose');

// const data= require('../../data');


// mongoose.connect("mongodb://localhost:27017/Pizza-web");
// const data= require('../../data');



const Schema= mongoose.Schema({
   customer_id:{
      ref:'User',
      type:mongoose.Schema.Types.ObjectId
   },
   items:{type:Object,required:true},
   phone:{type:String,require:true},
   address:{type:String,require:true},
   Amount:{type:Number,required:true},
   status:{type:String,default:'order_placed'},
   mode:{type:String,default:'cod'}
},{
    timestamps:true,
})


const Model= mongoose.model( 'order',Schema);

module.exports= Model;





// Model.create(data);