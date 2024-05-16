


const order_checker=  function(req,res,next)
{

    
      if(!req.session.user)
      {
 
         console.log("this is working");
         
         
           return res.redirect('/login');
          
      }
      else
      {
          return next();
      }
}



module.exports=order_checker;