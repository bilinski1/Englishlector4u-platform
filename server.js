const express = require('express');
const path = require('path');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();
// Setting up database mongoose, mongoDB
const mongoose = require('mongoose');
// Conncecting to database
server.listen(config.PORT, () => {
  mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true}, {useMongoClient: true},
    );
  console.log("Server running on port 3000 or online ;)");
});
// Setting Port, View Engine 
//app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
// Setting Location "views" for EJS 
app.set("views", path.resolve(__dirname, "views"));
app.get('/', function (req, res) {
    res.render('index');
  })
//app.listen(port, () => {

