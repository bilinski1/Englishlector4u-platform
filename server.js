const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
//const { ENV, URL, PORT, MONGODB_URI } = require('config');


// Setting Port, View Engine 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));



//import { connect } from 'mongoose';
//app.listen(config.PORT, () => {
  //connect(MONGODB_URI, { useNewUrlParser: true}, {useMongoClient: true})
//});
app.listen(port, () => {
  console.log("Server running on port 3000 or online ;)");
   });
app.get('/', function (req, res) {
  res.render('index')
});

