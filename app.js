var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var fullBill = require('./lib/fullBill');
var providerDurations = require('./lib/providerDurations');

app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


// console.log(fullBill.fullBill("CellC"));
app.get('/', function(req, res){
  res.render('index');
});


app.get('/cellC', function(req, res){
  var fullBills = fullBill.fullBill("CellC");
  var total = providerDurations.providerDurations(fullBills);

  var totDuration = 0;
  for(var x = 0; x < total.length; x ++){
    if(total[x].provider === "CellC"){
      totDuration += total[x].duration;

  }
  }
res.render('CellC', {bill: fullBills, total: totDuration} );
});


app.get('/Vodacom', function(req, res){
  var fullBills = fullBill.fullBill("Vodacom");
  var total = providerDurations.providerDurations(fullBills);

  var totDuration = 0;
  for(var x = 0; x < total.length; x ++){
    if(total[x].provider === "Vodacom"){
      totDuration += total[x].duration;

  }
  }
res.render('Vodacom', {bill: fullBills, total: totDuration});
});


app.get('/mtn', function(req, res){
  var fullBills = fullBill.fullBill("MTN");
  var total = providerDurations.providerDurations(fullBills);

  var totDuration = 0;
  for(var x = 0; x < total.length; x ++){
    if(total[x].provider === "MTN"){
      totDuration += total[x].duration;

  }
  }
res.render('MTN', {bill: fullBills, total: totDuration});
});





app.listen(3000, function () {
  console.log('Itemised Bill listening on port 3000!');
});
