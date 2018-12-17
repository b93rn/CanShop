let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

// Init the app.
let app = express()

let apiRouter = require('./routes/apiRouter')

// Config body parser
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

// db
mongoose.connect('mongodb://localhost/canshop')

var db = mongoose.connection

// Setup the port.
const port = process.env.port || 8080

// Basic message.
app.get('/', (req, res) => res.send('CanShop'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api', apiRouter)

// Launch app to listen to specified port
app.listen(port, () => {
    console.log(`running on ${port}`)
})