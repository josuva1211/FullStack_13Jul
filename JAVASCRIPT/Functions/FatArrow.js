//Normal Function Way
function add(x,y)
{
    return x+y;//5
}

console.log(add(2,3));

//Fat Arrow Function Way

/*let sum = (a,b) => {
    return a+b;
}*/

// Alternative

let sum = (a,b) => a+b;

console.log(sum(45,5));//50


let sq = n => n*n;

console.log(sq(10));

let res = n => x => n+x;

console.log(res(10)(20));//30

//In the above n is an outer function which returns the inner function x and the inner function x returns n + x;