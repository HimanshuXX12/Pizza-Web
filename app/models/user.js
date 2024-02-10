
const mongoose= require('mongoose');


const schema= mongoose.Schema({
     name:{type:String, required:true},
     email:{type:String, required:true, unique:true},
     password:{type:String, required:true},
     role:{type:String,default:"customer"},
},{
    timestamps: true }
)


 const Model= mongoose.model('user',schema);



 module.exports=Model;