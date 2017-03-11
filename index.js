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

//GET requests

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations/', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamily);
app.get('/restaurants/', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurants);

app.get('/skillz', mainCtrl.getSkillz)

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets)
//PUT requests

app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);


//POST requests

app.post('/hobbies', mainCtrl.addHobbies);
app.post('/occupations', mainCtrl.addOccupations);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurants);
app.post('/skillz', mainCtrl.addSkillz)
