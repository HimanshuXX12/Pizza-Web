
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
                  delete(cart.items,req.body._id);
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
                  details:cart.items[req.body._id]
               }
                  );
             },

         decrease: function(req,res)
         {

            console.log(text);

              
             
           
            // console.log(req.session.cart.items['65bd4a331481aa93b169c7fd'].qty);
            const body= req.body;
             console.log("before decreasing",req.session.cart);
         

            let qty=req.session.cart.items[body._id].qty;

 
               //  req.session.cart.items.req.body._id.qty=req.session.cart.items.req.body._id.qty-1;

                //  req.session.cart.items[body._id].qty=req.session.cart.items[body._id].qty-1;
                  if(qty<=0)
                  {
                     qty=qty;

                req.session.cart.quanity=req.session.cart.quanity;
                req.session.cart.price= req.session.cart.price;
                  
                  
               

                  } 
                  else
                  {
                     qty=qty-1;

                     req.session.cart.quanity=req.session.cart.quanity-1;
                     req.session.cart.price= req.session.cart.price-req.body.price;
                       
                  }
                  
               
                  
                   console.log("After decreasing ", req.session.cart);
                 
            

              return res.json({total_item:req.session.cart.quanity})
         }
    }
}

module.exports=cartControllers;