const Model= require('../../models/user');

const crypt= require('bcrypt');


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
         },
         postregister:  async function(req,res)
         {
            const {name,email,password}= req.body;


             if(!name ||!email ||!password)
             {
                   req.flash('error',"All fields are required");
                   req.flash('name',name);
                   req.flash('email',email);
                   return res.redirect("/register");
             }

            //  checking if any user already exist with this email
            Model.exists({email:email}).then((result)=>{
                   if(result)
                   {
                    console.log("hii",result);
                    req.flash('error',"Already exists");
                    return res.redirect('/register');
                   }
            }).catch((err)=>{
                  console.log(err) ; 
            })

            //  creating hash password

             const hash= await crypt.hash(password,10);
          
          
          
          
            const user= new Model({
              name:name,
              email:email,
              password:hash,
           })

            
             

            

             user.save().then((data)=>{
                    req.flash('error',"Registred sucessfully");
                  return res.redirect('/login');
             }).catch((err)=>{

                 req.flash('error','Something went wrong');
                 return res.redirect('/register');
             })



            
            
         },
         postlogin: async function(req,res)
         {

             const {email,password}= req.body;
             if(!email && !password)
             {
                req.flash('error',"Enter the mail and password");
                return res.redirect('/login');
             }
             else{
                 if(!email ||!password)
                 {
                     req.flash('error',"Both required");
                     return res.redirect('/login');
                 }
             }
              const user= await Model.findOne({email:email});

              if(!user)
              {
                  req.flash('error',"No user exist");
                   return res.redirect('/register');

              }
              else
              {

                    // const hash_password=  await crypt.hash(password,10);
                     
                      crypt.compare(password,user.password, function(err,data)
                      {
                          if(err)
                          {
                             console.log(err);
                          }
                          else if (data)
                          {
                              if(!req.session.user)
                              {
                                  req.session.user=user;

                              }
                                  
                             return res.redirect('/');
                          }
                          else
                          {
                             req.flash('error','login failed');
                             req.flash('email',email);
                              return res.redirect('/login');
                          }
                      })
                 
              }
         },
         postlogout: async function(req,res)
         {
            delete req.session.user;
            // delete req.session.cart;
             return res.redirect('/login');
         }
    }
}

module.exports=authControllers;