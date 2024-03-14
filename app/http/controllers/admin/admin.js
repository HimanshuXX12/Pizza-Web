

 const Model= require('../../../models/order');

//  const users_model= require('../../../models/user');
const moment= require('moment');

 function admin()
 {
    return{
        index:  async function(req,res)
        {
            const placed= await Model.find({status:{ $ne: 'Completed' }},null,{sort:{'createdAt':-1}}).
            populate('customer_id');


           
            
            return res.render('admin/orders',{orders:placed,moment:moment});

        },
        status : async function( req,res)
        {

          
     
           Model.updateOne({_id:req.body.orderId},{status:req.body.status}).then((err,data)=>{

              if(err)
              {
                console.log(err);
              }

              const eventEmitter =   req.app.get('eventEmitter');
              eventEmitter.emit('updatter',{id:req.body.orderId,status:req.body.status});
              return res.redirect('/admin');
           });

        }
        
    } 
 }



module.exports=admin;