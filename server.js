var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/', function(request, response){
  console.log(request.body);      // your JSON payload
  response.send(request.body);    // echo the result back
});

var listener = app.listen(process.env.PORT, function () {
  console.log('This app is listening on port ' + listener.address().port);
});
