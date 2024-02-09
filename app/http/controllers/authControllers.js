

function authControllers()
{
    return{
         login: function( req,res)
         {
            res.render('auth/Login'); 
         },
         register: function( req,res)
         {
            res.render('auth/register');
         }
    }
}

module.exports=authControllers;