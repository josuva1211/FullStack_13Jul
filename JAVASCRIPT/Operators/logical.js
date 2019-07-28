console.log(10 > 20 && 100 < 200);
console.log(10 > 20 || 100 < 200);
console.log(10 > 20 || 1000 < 200);
console.log(100 > 20 && 100 < 200);

//Lazy Evaluation in JS
//In case of OR Comparision Operator with more than two OR's then once your condition gets the first true then 
//It will not check the remaining conditions.

var a = 10;
console.log(!a);//false

var  b;
console.log(!b);//true

//Falsy Values

//-->Undefined
//-->null
//-->NaN
//-->0
//-->"
//-->Boolean False