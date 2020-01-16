// Importing modules
const port = process.env.PORT || 3000; // set up port
const express = require('express'); //a web framework for routing
const app = express();
const path = require('path'); // a routing tool for directories
const bodyParser = require('body-parser'); //a parsing tool for request data
const ejs = require('ejs'); // Embedded JavaScript templates
const mongoose = require('mongoose'); //a Object Relational Modelling tool


// Setting Port, View Engine 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Database Connection
const db = process.env.MONGODB_URL;
mongoose.connect('mongodb+srv://el4u:bilisw362@el4u-fc1rw.gcp.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true});
var dbc = mongoose.connection;
dbc.on('error', console.error.bind(console, 'connection error:'));
dbc.once('open', function() {
  console.log("connected to db ;)")
});

// First respond - index
app.get('/', (req, res) => {
  res.render('index')
});


app.listen(port, () => {
  console.log("Server running on port 3000 or online ;)");
   });

