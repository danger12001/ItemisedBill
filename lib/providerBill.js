var readBill = require('./readBill');
exports.providerBill = function(provider){
  var bill = readBill.readBill();
var providerBill = [];
for(var x = 0; x < bill.length; x++){
  var providerList = bill[x].provider;
  if(providerList == provider){
    providerBill.push(bill[x]);
  }
}
return providerBill;
};
