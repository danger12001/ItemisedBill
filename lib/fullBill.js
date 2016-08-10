
var providerBill = require('./providerBill');
var durationInSeconds = require('./durationInSeconds');
var orderList = require('../lib/orderList');
exports.fullBill = function(provider){
// var provider = "CellC";
var bill = providerBill.providerBill(provider);
var fullBill = [];
for(var x = 0;x < bill.length; x ++){
if(bill[x].provider === provider){
      fullBill.push({provider: provider, number: bill[x].number, duration: bill[x].duration, date: bill[x].date});
}
}
// var order = orderList.orderList(fullBill);
// return order;
return fullBill;
};
