//Passing a function as a parameter to another function

function add(a,b,cb) 
{
    let sum = a+b;
    return cb(sum)
}

/*function square(n)
{
    return n * n;
}*/

let res = add(2,3,function(n) {
    return n * n;
});

console.log(res);//25

function outer(x)
{
    function inner(y)
    {
        console.log("Inner Functiion");
        return x + y;
    }
    return inner;
}

let inn = outer(10);

let fR = inn(5);

console.log(fR);//15

//inn();

//outer()();

let first = outer(30);

let rest = first(5);

console.log(rest);//35

//A function which remembers its scope is called a closure

//Currying Concept
let addition = outer(45)(45);

console.log(addition);//90


function Summation(a)
{
    function inner1(b)
    {
        function inner2(c)
        {
            function inner3(d)
            {
                return a+b+c+d;
            }
            return inner3;
        }
        return inner2;
    }
    return inner1;
}

console.log(Summation(2)(3)(1)(4));

