// Function Declaration

function add()
{
    console.log("Executing Add Function");
}

add();//Executing Add Function
add();//Executing Add Function
add();//Executing Add Function

function add1(a,b)
{
    console.log("Value of a is ", a);
    console.log("Value of b is ", b);
    var sum = a + b;
    console.log(sum);
    //return sum;-->Then value will be undefined if you not return
    return sum;

    console.log("Hi")//This Line never gets executed once return is called in a function
    //When you return two variables the last variable value will only be printed.
}

add1(1,2);//3
add1(5,25);//30

add1();//a = b -> Undefined, sum -> NaN
add1(2);// a = 2, b -> Undefined, sum -> NaN
add1(1,2,3,4);//Gives Correct Result. Extra parameters are ignored

//console.log(sum);throws error

var x = 10;
var y = 20;

var addition = add1(x,y);
console.log('Addition', addition);

function add2(c,d)
{
    if (typeof c == 'number' && typeof d == 'number')
    {
        return;
    }

    console.log("hello");
    return c + d;
}
var z = 23;
var a = 'hi';
var addn = add2(z,a);
console.log(addn);

//add2(4,5);//If condition satisfies it will return value and doesnt print hello in console
//add2(4);//If condition doesnt satisfies and it will print the hello value

//To check a number is odd or even using function

function OddEven(n)
{
    if (n % 2 == 0)
    {
        return 'Even';
    }
    else
    {
        return 'Odd';
    }
}

var res = OddEven(5);
console.log(res);//Odd
console.log(OddEven(5));//Odd

function sum(a,b,c,d)
{
    console.log(arguments);//arguments store all the values that is passed in  an array. Arguments is an array like object but not an array
    //return a+b+c+d;

    var add = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        add += arguments[i];
    }
    return add;
}

console.log(sum(1,2,3,4));//10, 10
console.log(sum(1,2));//NaN, 3
console.log(sum(1,2,3,4,5,6,7));//10, 28

//To find the square of a number
function Square(n)
{
    return n * n;
}

console.log(Square(25));//625

//Check Whether a number is palindrome or not

function IsPalindrome(num)
{
    var temp = num;
    var result = 0;

    while(num > 0)
    {
        var rem = num % 10;
        num = parseInt(num / 10);
        result = result * 10 + rem;
    }
    
    if (temp == result)
    {
        return true;
    }
    else
    {
        return false;
    }

}

var res = IsPalindrome(121);
var res = IsPalindrome(122);
console.log(res);
