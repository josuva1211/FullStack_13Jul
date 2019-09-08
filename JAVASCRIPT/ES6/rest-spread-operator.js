function add(a,b)
{
    return a + b;
}

console.log(add(1,2));//3

//...REST operator takes your all arguments and pass into an array
function add1(...args)
{
    console.log(args);//(7) [1, 2, 3, 4, 5, 6, 7]
}


console.log(add1(1,2,3,4,5,6,7));//Rest operator converts your CSV into an array

//Spread Operator converts your array into a CSV

let arr = [1,2,3,4,5];

let biggest = Math.max(...arr);

console.log(biggest);//5

//Next Session --> call, apply, bind