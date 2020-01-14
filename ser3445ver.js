const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);
// set view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views'))

app.get('/', function (req, res) {
    res.send('hello world')
    res.render('index');
  })

app.listen(port, () => {
    console.log("Server running on port 3000");
    console.log("Server running on port 3000 or online ;)");
   });