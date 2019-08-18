const PI = 3.14;

//PI = 20;-->Throws Error

//Once a var is created using const keyword you cant change the value of the var.

console.log(PI);

const obj = {
    name : "js"
}

//In const objects you can change the value of the properties but you cannot create a obj with the same name and reassign the values.
obj.name = "Javascript";

/*obj = {
    name : "Array"
}--> Throws error when you do console.log

console.log(obj);//Javascript*/

//Let  keyword behaves the same as your Var keyword but it is accessible only within the block scope
let MyVar = 100;

MyVar = 20;

console.log(MyVar);//20

if (true)
{
    let n = "Shano";//n can be used with in this if block
    console.log(n);//Shano
}

//console.log(n);//throws error --> var created with let keyword cannot be accessed outside the block scope

let m = 20;

function foo()
{
    //console.log(m);//cannot access 'm' before initialization
    let m = 30;
    console.log(m);
}
//In the above Hoisting happens but you cannot access a variable before initialization using let keyword
foo();

//Pass By Value
var a = 10;

function foo1(x)
{
    x = 20;
}

foo1(a);
console.log(a);//10

//Pass By Reference
var  obj1 = {
    name : "js"
}

function foo2(x)
{
    x.name = "javascript";
}

foo2(obj1);
console.log(obj1.name);//javascript