console.log(b);//Undefined

var b = 20;

console.log(b);//20

add(1,2);//3

function add(a,b)
{
    console.log(a+b);
}

//addition(4,5);--> Throws error (Addition is not a function)

var addition = function(x,y) {
    console.log(x+y);
}

addition(4,5);//9