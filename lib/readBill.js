var fs = require('fs');

exports.readBill = function(){
var items = [];
var bill = String(fs.readFileSync("../bills/itemisedBill.csv"));
var interimArray = bill.split('\n').splice(1);
interimArray.pop();

for(var x = 0; x < interimArray.length; x ++){
  var item = interimArray[x].split(',');
  items.push({
    date: item[0],
    provider: item[1],
    number: item[2],
    duration: item[3]
  });
}
return items;




};
