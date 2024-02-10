

const checker= function(req,res,next)
{
     if(!req.session.user_name)
     {
          return next();
     }
     else{
         return res.redirect('/');
     }



}


module.exports=checker;