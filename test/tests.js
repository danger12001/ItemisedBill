var assert = require('assert');
var readBill = require('../lib/readBill');
var providerBill = require('../lib/providerBill');

describe("readBill", function(){
  it('should take in a bill csv file and return a mapped bill object', function(){
    var result = readBill.readBill();
    assert.deepEqual(result, [ { date: '01/10/2015',
    provider: 'MTN',
    number: '0832401145',
    duration: '00h05m34s' },
  { date: '01/10/2015',
    provider: 'MTN',
    number: '0838758090',
    duration: '00h01m34s' },
  { date: '03/10/2015',
    provider: 'Vodacom',
    number: '0821302398',
    duration: '00h00m34s' },
  { date: '03/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h02m34s' },
  { date: '03/10/2015',
    provider: 'MTN',
    number: '0832401145',
    duration: '00h06m34s' },
  { date: '06/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h05m34s' },
  { date: '06/10/2015',
    provider: 'Vodacom',
    number: '0821302398',
    duration: '00h02m04s' },
  { date: '06/10/2015',
    provider: 'MTN',
    number: '0838758090',
    duration: '00h01m16s' },
  { date: '07/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h03m04s' },
  { date: '10/10/2015',
    provider: 'MTN',
    number: '0832401145',
    duration: '00h02m41s' },
  { date: '10/10/2015',
    provider: 'MTN',
    number: '0838758090',
    duration: '00h09m11s' },
  { date: '10/10/2015',
    provider: 'Vodacom',
    number: '0828907600',
    duration: '00h00h56ss' },
  { date: '10/10/2015',
    provider: 'CellC',
    number: '0825605600',
    duration: '00h01m40s' },
  { date: '11/10/2015',
    provider: 'MTN',
    number: '0832401145',
    duration: '00h05m34s' },
  { date: '12/10/2015',
    provider: 'CellC',
    number: '0825605600',
    duration: '00h01m34s' },
  { date: '12/10/2015',
    provider: 'Vodacom',
    number: '0824501276',
    duration: '00h00m34s' },
  { date: '13/10/2015',
    provider: 'MTN',
    number: '0838758090',
    duration: '00h02m07s' },
  { date: '14/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h06m34s' },
  { date: '14/10/2015',
    provider: 'MTN',
    number: '0838758090',
    duration: '00h05m34s' },
  { date: '15/10/2015',
    provider: 'MTN',
    number: '0832401145',
    duration: '00h02m39s' },
  { date: '15/10/2015',
    provider: 'Vodacom',
    number: '0821005078',
    duration: '00h01m16s' },
  { date: '15/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h03m04s' },
  { date: '16/10/2015',
    provider: 'MTN',
    number: '0831239023',
    duration: '00h02m41s' },
  { date: '16/10/2015',
    provider: 'CellC',
    number: '0845009087',
    duration: '00h09m11s' },
  { date: '17/10/2015',
    provider: 'Vodacom',
    number: '0828009712',
    duration: '00h00h56ss' },
  { date: '18/10/2015',
    provider: 'MTN',
    number: '0832004576',
    duration: '00h01m40s' },
  { date: '21/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h05m34s' },
  { date: '21/10/2015',
    provider: 'MTN',
    number: '0831239023',
    duration: '00h01m34s' },
  { date: '22/10/2015',
    provider: 'MTN',
    number: '0837351200',
    duration: '00h00m34s' },
  { date: '23/10/2015',
    provider: 'Vodacom',
    number: '0828901271',
    duration: '00h02m34s' },
  { date: '23/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h06m34s' },
  { date: '24/10/2015',
    provider: 'MTN',
    number: '0834590001',
    duration: '00h05m34s' },
  { date: '24/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h02m04s' },
  { date: '24/10/2015',
    provider: 'Vodacom',
    number: '0824009001',
    duration: '00h01m16s' },
  { date: '27/10/2015',
    provider: 'MTN',
    number: '0831239023',
    duration: '00h03m04s' } ]
);
  });
});
describe('providerBill', function(){
it('should return all bill items of a specific provider', function(){
  var result = providerBill.providerBill("CellC");
  assert.deepEqual(result ,[ { date: '03/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h02m34s' },
  { date: '06/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h05m34s' },
  { date: '07/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h03m04s' },
  { date: '10/10/2015',
    provider: 'CellC',
    number: '0825605600',
    duration: '00h01m40s' },
  { date: '12/10/2015',
    provider: 'CellC',
    number: '0825605600',
    duration: '00h01m34s' },
  { date: '14/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h06m34s' },
  { date: '15/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h03m04s' },
  { date: '16/10/2015',
    provider: 'CellC',
    number: '0845009087',
    duration: '00h09m11s' },
  { date: '21/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h05m34s' },
  { date: '23/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h06m34s' },
  { date: '24/10/2015',
    provider: 'CellC',
    number: '0841257809',
    duration: '00h02m04s' } ]
);
});
});
