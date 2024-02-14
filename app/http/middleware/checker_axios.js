

const checker_axios= async function(req,res,next)
{
     if(req.session.user)
     {
          return next();
     }
     else{
         return res.redirect('/login');
     }
}



module.exports= checker_axios;