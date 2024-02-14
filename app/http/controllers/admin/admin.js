

 const Model= require('../../../models/order');

 function admin()
 {
    return{
        index:  async function(req,res)
        {

            const placed= await Model.find({status:"order_placed"},
            null,
           { sort:{'createdAt':-1}}).exec( async (err,orders)=>{
              if(req.xhr)
              {
                 return res.json(orders);
              }
              else
              {
                 return res.render('admin/orders')
              }

           });
            

        }
    }
 }



module.exports=admin;