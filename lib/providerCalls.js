
var providerBill = require('./providerBill');
var bill =  providerBill.providerBill("MTN");
exports.providerCalls = function(bill){
var noOfCalls = bill.length;
return noOfCalls;
};
