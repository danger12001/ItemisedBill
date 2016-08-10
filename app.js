var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());



app.get('/', function(req, res){
res.render('index');
});





app.listen(3000, function () {
  console.log('Itemised Bill listening on port 3000!');
});
