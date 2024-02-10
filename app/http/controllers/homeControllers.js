

const mongoose= require('mongoose');

const Model= require('../../models/model');

function homeControllers()
{
   const obj={
      index:  async function(req,res)
      {
          const pizzas=  await Model.find();
          
        //    console.log(session.cart);
      
          return res.render('home',{pizza:pizzas });
      }
   }
    
    return obj;
   
}


module.exports=homeControllers;