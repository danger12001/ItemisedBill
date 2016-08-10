var durationInSeconds = require('./durationInSeconds');
exports.orderList = function(bill){
var orderedList = [];
for(var x = 0; x < bill.length; x ++){
  bill[x].duration = durationInSeconds.durationInSeconds(bill[x].duration);
}
var order =  bill.sort(function(a,b){
  return a.duration - b.duration;
});
return order;
};
