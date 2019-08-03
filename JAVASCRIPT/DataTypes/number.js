var num = 10.01;

console.log(num);
 console.log(typeof num);//Number

 var hexa = 0x12a;
 console.log(hexa);//Converts to number
 console.log(typeof hexa);

 var octal = 0123;
 console.log(octal);
 console.log(typeof octal);

 var special = 10 / 'a';
 console.log(special);//NaN
 console.log(typeof special);//Number

 var large = 1e+3 + 1001;
console.log(large);//2001

var l = 1e4;
console.log(l);

var inf = 1e309;//Max val for number to define is 1e308
console.log(inf);//Infinity
console.log(typeof inf);//Number

var n = new Number(50);
console.log(n);// Number {50}
console.log(typeof n);// Object


