
const bcrypt= require('bcrypt')
const admin_checker=  function(req,res,next)
{
      if((req.session.user.email=="admin124@gmail.com" &&  req.session.user.role=='Admin'))
      {
          return next();
      }
      else{
         return res.redirect('/');
      }
} 
 
   

module.exports=admin_checker;