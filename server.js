const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get('/', function (req, res) {
    res.render('index');
  })

app.listen(port, () => {
    console.log("Server running on port 3000 or online ;)");
   });

