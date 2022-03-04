const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'index.html'));
});
 
 app.listen(port);
 console.log('5 Day Forecast for SF, CA; Server started at http://localhost:' + port);