const Model= require('../../models/order');

const moment= require('moment');

function order()
{
    return{
        order: async function(req,res)
        {
             console.log(req.session.user._id);
              const {phone,address}= req.body;
              console.log(req.body);

              if( !phone || !address)
              {
                 req.flash('error','Phone and address both are required');
                 return res.redirect('/cart');
              }

              const order=new Model({
                customer_id:req.session.user._id,
                phone:phone,
                address:address,
                items:req.session.cart.items,
                Amount:req.session.cart.price
              })


              order.save().then((result)=>{
                if(result)
                {
                    req.flash('error',"Order Placed");
                    delete req.session.cart;
                    
                    return res.redirect('/status');
                }

              }).catch((err)=>{

                   req.flash('error',"Something went wrong");
                   
                  return res.redirect('/cart');
              })


        },
        list: async function(req,res)
        {
            const order= await Model.find({customer_id:req.session.user._id},
                null,
                {sort:{'createdAt':-1}});

            return res.render('customers/order',{orders:order,message:"Order placed",moment:moment});

        },
        delete_order: async function( req,res)
        {
             const order= await Model.find({_id:req.body._id});

             console.log("order searched",order);
             await Model.deleteOne({_id:req.body._id}).then((result)=>{
                   if(result)
                   {
                     console.log();
                   }
            }).catch((err)=>{
                 console.log(err);
            });
              console.log(req.body);
             
               return res.json({});
        }

    }
}


module.exports=order;