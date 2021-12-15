function calculateBillTotal(preTaxAndTipAmount) {
   let BillTotal =preTaxAndTipAmount+ preTaxAndTipAmount*0.095 +preTaxAndTipAmount*0.15
   return BillTotal
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9