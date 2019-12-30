const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.listen(port, () => {
    console.log("Server running on port 3000");
   });

