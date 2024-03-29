
const homeControllers= require('../app/http/controllers/homeControllers');

const authControllers = require('../app/http/controllers/authControllers');
const cartControllers = require('../app/http/controllers/customers/cartcontroller');

const checker= require('../app/http/middleware/checker');

const ordercontroller= require('../app/http/controllers/ordercontroller'); 


const order_checker= require('../app/http/middleware/order_checker');

 const admin=require('../app/http/controllers/admin/admin');

 const admin_checker= require('../app/http/middleware/admin_checker');
//  const new_checker=require('../app/http/middleware/new_checker');

function route (app)
{
  app.get('/',homeControllers().index);

  app.get('/cart',cartControllers().cart)

 
app.get("/login",checker,authControllers().login);


// app.post('/register',authControllers().postregister)
app.get('/logout',order_checker,authControllers().postlogout)
  app.get('/cart',order_checker,cartControllers().cart)
app.post('/update',order_checker,cartControllers().update);
app.get('/register',checker,checker,authControllers().register);

app.post('/register',checker,authControllers().postregister);
app.post('/login', checker,authControllers().postlogin);
app.post('/order',order_checker,ordercontroller().order);
app.get('/status',order_checker,ordercontroller().list);
app.post('/delete',order_checker,cartControllers().delete);

app.post('/delete_order',ordercontroller().delete_order);
// app.post('/logout', authControllers().postlogout);

// Admin routes
app.get('/admin',order_checker,admin_checker,admin().index);
app.post('/admin',admin_checker,admin().status);

app.get('/status/:id',order_checker,ordercontroller().stages);



}



module.exports= route;