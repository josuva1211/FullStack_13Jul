var TotPurchase = 520;

var Discount = 20;

var BiggerDiscount = 50;

var FinalAmt;

/*if (TotPurchase > 500)
{
    console.log('You are availed with a discount');
    FinalAmt = TotPurchase - Discount;
}
else
{
    console.log('You are not availed with a discount');
    FinalAmt = TotPurchase;
}*/

//console.log(FinalAmt);

if (TotPurchase > 50 && TotPurchase <= 500)
{
    console.log('You are availed with a discount');
    FinalAmt = TotPurchase - Discount;
}
else if (TotPurchase > 500)
{
    console.log('You are availed with a bigger discount');
    FinalAmt = TotPurchase - BiggerDiscount;
}
else
{
    console.log('You are not availed with a discount');
    FinalAmt = TotPurchase;
}

console.log(FinalAmt);

console.log('Program Ends');


var number = 22;

if (number % 2 == 0)
{
    console.log("The number is even");
}
else
{
    console.log("The number is odd");
}

//Ternary Operator
var num = 23;
var OddEven = (num % 2 == 0)?'Even':'Odd';
console.log(OddEven);

