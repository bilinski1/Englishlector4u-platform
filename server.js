const express = require('express');
const app = express();
const { resolve } = require('path');
const bodyParser = require('body-parser');
const { ENV, URL, PORT, MONGODB_URI } = require('./config');
//app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
//static files
app.use(express.static(path.join(__dirname, 'public')));
//import { connect } from 'mongoose';
http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});

app.listen(config.PORT, () => {
  connect(MONGODB_URI, { useNewUrlParser: true}, {useMongoClient: true})
});
app.get('/', function (req, res) {
    res.render('index')
});
