var a = 10;

console.log(a);//10

//Any variable that is created except inside the function block then the variable is taken as a global variable
if (true)
{
    var b = 50;
    console.log('Inside if ', a);
    console.log(b);
}

console.log('Accesing b in global ', b);

function foo(arg1, arg2)
{
    var str = "Hii";
    bottle = "Green";//this var will be created as a global var since var keyword is not given
    console.log('Inside Function ', a);
    console.log('Accesing b in function ', b);
    console.log(str);
    console.log(bottle);
    console.log("Argument",arg1);
}

//console.log(str);//str is not defined
foo('val1','val2');

console.log(bottle);//Green

//console.log("Argument",arg1);//Throws error

//When you try to access a var inside a function first it will look for the var inside the function, if not found 
//then it will try to find the var in the gloabal.

//When you try to access a var inside the function to your global it will throw error. Var defined inside the
//function can be used only within that function scope.


function outer()
{
    var OutVar = 50;
    console.log("Outer Fun Body", a);//10

    function inner()
    {
        var InVar = 25;
        console.log("Outer Scope Fn", OutVar);//50
        console.log("Inner Fun Body", a);//10
    }

    inner();

    //console.log("Outer Scope Fn", InVar);//not defined
}

//Hoisting --> Moves the declaration part to the top 
//Before Executing JS will do the compilation and assigns the scope to each variable.
var x = 20;

function fn()
{
    console.log(x);//Undefined
    var x = 10;
    console.log(x);//10
}

fn();

