//A function without a name is called as an ananomous function and it works the same as named function
var add = function sum(a,b){
    return a + b;
}

console.log(add(12,2));//14

//sum(15,5);-->Throws Error when you assign a variable with function

//Ananymous Function
    // Self Executing Function
    // Callback

//Self Invoking Function
(function (a,b)
{
    console.log(a,b);
    console.log("Self Executing Function");
})(12,3);
//This will get executed automatically once your page gets loaded

//Callback Function

function foo()
{
    console.log('I am foo');
}

function printfoo(cb)
{
    cb();
}

printfoo(foo);//I am foo

foo();//I am foo

//Passing a ananymous function (callback) to function
printfoo(function() {
    console.log("I am anonymous")
});//I am anonymous