const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { ENV, URL, PORT, MONGODB_URI } = require('./config');


//app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
//static files
app.use(express.static(path.join(__dirname, 'public')));


//import { connect } from 'mongoose';
app.listen(config.PORT, () => {
  connect(MONGODB_URI, { useNewUrlParser: true}, {useMongoClient: true})
});

app.get('/', function (req, res) {
  res.render('index');
})
app.listen(port, () => {
  console.log("Server running on port 3000 or online ;)");
 });