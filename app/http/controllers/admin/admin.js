

 const Model= require('../../../models/order');

//  const users_model= require('../../../models/user');
const moment= require('moment');

 function admin()
 {
    return{
        index:  async function(req,res)
        {
            const placed= await Model.find({status:'order_placed'},null,{sort:{'createdAt':-1}}).
            populate('customer_id');


            console.log(placed);

            
            return res.render('admin/orders',{orders:placed,moment:moment});

        }
    }
 }



module.exports=admin;