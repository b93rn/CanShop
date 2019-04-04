let express = require('express');
let bodyParser = require('body-parser');
const db = require('./database');
const user = require('./Data/user');
const product = require('./Data/product');
const sale = require('./Data/sale');

// Init the app.
let app = express()

// Add all the Api routes.
let apiRouter = require('./routes/apiRouter')

// Config body parser.
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

// Setup the port.
const port = process.env.port || 8080

// Basic message.
app.get('/', (req, res) => res.send('CanShop'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use('/api', apiRouter);

// Launch app to listen to specified port
app.listen(port, () => {
  console.log(`running on ${port}`)
  db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    user.sync();
    product.sync();
    sale.sync();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
})