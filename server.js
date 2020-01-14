import express from 'express';
import { resolve } from 'path';
import { PORT, MONGODB_URI } from './config';
import bodyParser from 'body-parser';
const app = express();
// Setting up database mongoose, mongoDB
import { connect } from 'mongoose';
// Conncecting to database
app.listen(PORT, () => {
  connect(MONGODB_URI, { useNewUrlParser: true}, {useMongoClient: true},
    );
  console.log("Server running on port 3000 or online ;)");
});
// Setting Port, View Engine 
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
// Setting Location "views" for EJS 
app.set("views", resolve(__dirname, "views"));
app.get('/', function (req, res) {
    res.render('index');
  })
//app.listen(port, () => {

