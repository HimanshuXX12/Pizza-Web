
const order_checker=  function(req,res,next)
{
      if(req.session.user)
      {
          return next();
      }
      else
      {
        
         
         return res.redirect('/login');
      }
}



module.exports=order_checker;