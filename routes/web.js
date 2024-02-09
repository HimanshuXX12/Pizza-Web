
const homeControllers= require('../app/http/controllers/homeControllers');

const authControllers = require('../app/http/controllers/authControllers');
const cartControllers = require('../app/http/controllers/customers/cartcontroller');


function route (app)
{
  app.get('/',homeControllers().index);

  app.get('/cart',cartControllers().cart)

 
app.get("/login",authControllers().login)


  app.get('/cart',cartControllers().cart)
app.post('/update',cartControllers().update);
app.get('/register',authControllers().register)
app.post('/decrease',cartControllers().decrease)


}



module.exports= route;