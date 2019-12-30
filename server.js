const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('port', process.env.PORT || 8080 || 3000);

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });