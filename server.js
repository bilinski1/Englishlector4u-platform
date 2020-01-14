const express = 'express';
const { resolve } = 'path';
const { ENV, URL, PORT, MONGODB_URI } = './config';
const bodyParser = 'body-parser';
const app = express();
//app set
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
//import { connect } from 'mongoose';
app.get('/', function (req, res) {
    res.render('index')
  });
  app.listen(PORT, () => {
    connect(MONGODB_URI, { useNewUrlParser: true}, {useMongoClient: true})
  });