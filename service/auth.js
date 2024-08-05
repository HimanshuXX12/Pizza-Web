
const mapper= new Map();
var jwt = require('jsonwebtoken');
const key="Hemant@@@95";
 async  function setUser(user)
{
  return jwt.sign({
    email:user.email,
    name:user.name,
    role:user.role
  },key);

}   

 async function getUser(token)
{
    if(!token)
        {
            return null;
        }
        try{
            return jwt.verify(token,key);
        }catch{
            return null;
        }
}



module.exports={
    setUser,
    getUser
}