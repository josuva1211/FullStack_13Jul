//Properties

//PI

console.log(Math.PI);

//LN10

console.log(Math.LN10);

console.log(Math.LN2);

console.log(Math.SQRT2);

console.log(Math.pow(2,3));

console.log(Math.sqrt(9));

let max = Math.max(100,200,300,50);

console.log(max);

let min = Math.min(100,200,300,50);

console.log(min);

console.log(Math.cbrt(27));

console.log(Math.random());

let random = Math.random();

console.log(random);

let rand = Math.random() * 10 + 1;

console.log(rand);

function randomNum(min, max)
{
    return Math.random() * (max - min) + min;
}

let rn = randomNum(50,100);

console.log(rn);

console.log(Math.floor(10.6));//10 --> rounds backwards

console.log(Math.ceil(10.6));//11 --> rounds forwards

console.log(Math.round(10.6));//11 --> rounds nearest integers