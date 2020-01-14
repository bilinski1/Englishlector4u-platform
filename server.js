import express from 'express';
//import { resolve } from 'path';
import { PORT, MONGODB_URI } from './config';
import bodyParser from 'body-parser';
const app = express();
// Setting Port, View Engine 
//app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));
// Setting up database mongoose, mongoDB
import { connect } from 'mongoose';
// Conncecting to database
app.listen(PORT, () => {
  connect(MONGODB_URI, { useNewUrlParser: true}, {useMongoClient: true})
});
app.get('/', function (req, res) {
    res.render('index');
  })
//app.listen(port, () => {

