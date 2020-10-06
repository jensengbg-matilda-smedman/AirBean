const express = require('express')
const app = express ();
const cors = require('cors')

app.use(express.json());
app.use(cors());
 
//routes
const caffeeRoute = require('./routes/coffee')
const ordersRoute = require('./routes/orders')

//kaffee
app.use('/products', caffeeRoute)

//orders
app.use('/orders', ordersRoute)

const port = 5000;
app.listen(port, () =>
console.log('server is running'))