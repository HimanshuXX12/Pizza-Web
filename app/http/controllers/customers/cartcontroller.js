
const mongoose= require('mongoose');
// const session = require('express-session');
const Model= require('../../../models/model');
const { text } = require('express');

// const session =require('express-session');


function cartControllers()
{
    return{
         cart: function(req,res)
         {
            // const pizzas= Model.find();
            res.render('customers/cart')
         },
         update: function(req,res)
         {
                if(!req.session.user)
                {
                   return res.json({total_item:0});
                }

               if(!req.session.cart)
                  {
                     req.session.cart={
                        items:{},
                        quantity:0,
                        price:0
                  }
                  }
                  let cart= req.session.cart;

              
             
                  if(!cart.items[req.body._id])
                  {
                     cart.items[req.body._id]={
                        item:req.body,
                        qty:0
                     }
                     
                  }

            



            
                  if(req.body.text=='+')
                  {
                     
                     console.log("Before adding",cart);
      
                     
      
                     if(cart.items[req.body._id].qty==0)
                     {
                        cart.items[req.body._id].qty=1;
                        cart.quantity=cart.quantity+1;
                        cart.price=cart.price+req.body.price;
                     }
                     else
                     {
                        cart.items[req.body._id].qty=cart.items[req.body._id].qty+1;
                        cart.quantity=cart.quantity+1;
                        cart.price=cart.price+req.body.price;
         
      
                     }

                     console.log("+ is clicked",cart);

                  }

                  else
                  { 
                     console.log("- is cliked and beore decreasing",cart);
                     
                     
                     if(cart.items[req.body._id].qty<=0)
                     {
                        delete cart.items[req.body.item._id];
                     }
                     else
                     {
                        cart.items[req.body._id].qty=cart.items[req.body._id].qty-1;
                        cart.quantity=cart.quantity-1;
                        cart.price=cart.price-req.body.price;
                     }

                     console.log("- is clicked after decresing", cart)


                  }
                  
                  
            //   console.log(req.session.cart);
               // console.log("chupa rustom",req.session.cart);

                  // console.log(req.session.cart);

                  return  res.json(
                     {
                        total_item:req.session.cart.quantity,
                        cart:req.session.cart,
                        details:cart.items[req.body._id],
                        
                     }
                        );
             },
         delete: async function(req,res)
         {
             console.log("Item comming");
             let pizza= req.body;
            
             console.log(req.body);
             let cart= req.session.cart;
             let deduct=req.body.qty*req.body.item.price;

             cart.quantity=cart.quantity-req.body.qty;
             
             cart.price=cart.price-deduct;
             delete cart.items[req.body.item._id];
             console.log(cart);
             return res.json({price:cart.price});
         
         }

        
    }
}

module.exports=cartControllers;