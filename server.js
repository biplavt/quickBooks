var express = require('express');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

var port=3000 || process.env.PORT;

app.use(require('./routes/appRoutes'));

app.listen(port, function () {
  console.log(`Server started at port 3000..`);
});