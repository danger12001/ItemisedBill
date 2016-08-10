var readBill = require('./readBill');

var durationInSeconds = require('./durationInSeconds');
var orderList = require('../lib/orderList');
exports.providerDurations = function(bill){
// bill = readBill.readBill();

var sortedCalls = orderList.orderList(bill);
var providerDurations = [];

var MTNtime =0;
var CellCtime = 0;
var Vodacomtime = 0;

for(var y = 0;  y < sortedCalls.length; y ++){
if(sortedCalls[y].provider == "MTN"){
  MTNtime += sortedCalls[y].duration;
}
else if(sortedCalls[y].provider == "CellC"){

  CellCtime += sortedCalls[y].duration;
}
else if(sortedCalls[y].provider == "Vodacom"){

  Vodacomtime += sortedCalls[y].duration;
}

}
providerDurations.push({provider: "MTN",
                        duration: MTNtime},
                        {provider: "CellC",
                        duration: CellCtime},
                        {provider: "Vodacom",
                        duration: Vodacomtime});

return providerDurations;
};
