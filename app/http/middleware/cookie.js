const session = require("express-session");
const { setUser, getUser}= require('../../../service/auth');

async function cookie_checker(req,res,next)
{
  
   const token=await req.cookies.token;
   
   if(!token)
    {
        return res.redirect('/login');
    }
    console.log(token);
     const user= await getUser(token);
     
     
     if(!user)
        {
             return res.redirect('/login');
        }
     else
     {
       
         return next();

     }   
}



module.exports=cookie_checker;