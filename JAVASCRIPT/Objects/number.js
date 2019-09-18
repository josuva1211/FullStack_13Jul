let num = 16;

let n = new Number(100);

console.log(typeof num);

console.log(typeof n);

//To extract the value use ValueOf()
console.log(n.valueOf());//100

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.MAX_SAFE_INTEGER);

//Boolean

let b = new Boolean("");

console.log(b);//Returns an object with falsy value

console.log(b.valueOf());//false