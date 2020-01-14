const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();
// Setting up database mongoose, mongoDB
const mongoose = require('mongoose');
// Conncecting to database
mongoose.connect('mongodb+srv://el4u:bilisw362@el4u-fc1rw.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useMongoClient: true
}
);
// Setting Port, View Engine 
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
// Setting Location "views" for EJS 
app.set("views", path.resolve(__dirname, "views"));


app.get('/', function (req, res) {
    res.render('index');
  })

app.listen(port, () => {
    console.log("Server running on port 3000 or online ;)");
   });

