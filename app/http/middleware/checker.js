

const checker= function(req,res,next)
{
     if(!req.session.user)
     {
          return next();
     }
     else{
         return res.redirect('/');
     }



}


module.exports=checker;