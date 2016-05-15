var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var input;
var answer;

//Set Port Number
app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: true}));



app.post('/math', function(req, res) {
  input = req.body;
    switch(input.type){
      case '+':
      answer = Number(input.x) + Number(input.y);
      break;
      case '-':
      answer = Number(input.x) - Number(input.y);
      break;
      case '*':
      answer = Number(input.x) * Number(input.y);
      break;
      case '/':
      answer = Number(input.x) / Number(input.y);
      break;
      default:
      console.log("Something went horribly wrong!");
    }

    res.send(answer.toString());
});

app.get('/*', function(req, res) {
  console.log('request params', req.params);
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log('Server is ready on port: ' + app.get('port'));
});
