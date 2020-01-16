// Importing modules
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');


// Setting Port, View Engine 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Database Connection
const db = process.env.MONGODB_URL;
mongoose.connect('mongodb+srv://el4u:bilisw362@el4u-fc1rw.gcp.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true});
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
// we're connected!
//});

// First respond - index
app.get('/', (req, res) => {
  res.render('index')
});


app.listen(port, () => {
  console.log("Server running on port 3000 or online ;)");
   });

