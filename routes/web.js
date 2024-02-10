
const homeControllers= require('../app/http/controllers/homeControllers');

const authControllers = require('../app/http/controllers/authControllers');
const cartControllers = require('../app/http/controllers/customers/cartcontroller');

const checker= require('../app/http/middleware/checker');


function route (app)
{
  app.get('/',homeControllers().index);

  app.get('/cart',cartControllers().cart)

 
app.get("/login",checker,authControllers().login)

// app.post('/register',authControllers().postregister)
app.get('/logout',authControllers().postlogout)
  app.get('/cart',cartControllers().cart)
app.post('/update',cartControllers().update);
app.get('/register',checker,authControllers().register);
app.post('/decrease',cartControllers().decrease);
app.post('/register',authControllers().postregister);
app.post('/login', authControllers().postlogin);
// app.post('/logout', authControllers().postlogout);


}



module.exports= route;