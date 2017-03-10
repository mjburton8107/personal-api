var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(bodyParser.json())

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.use(middleware.addHeaders)

app.listen(port, function(){
  console.log('now listening on port ' + port)
})

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies/:type', mainCtrl.getHobbies);
// app.get('/hobbies/:type', mainCtrl.getHobbies);
app.get('/family/:gender', mainCtrl.getFamily);
