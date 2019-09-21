// Write a program to print ‘hello world’

console.log("Hello World!!!");//Hello World!

// Declare a variable and test variable name rules and log the variable value.

var d = 10;
console.log(d);//10
/*var 10a = 15;
console.log(10a);*///Throws Error

var _b = 'shri'
console.log(_b);//Shri

//Comment Javascript code (single and multi-line comment).

//var name = 'Shano'-->Single Line

/*var K = 25;
X = K + 25;
console.log(X);-->Multi Line*/

// Store values using assignment operator.

var a;
var b;
a = 5;
b = a;
console.log(a);//5
console.log(b);//5

//Add two numbers using plus operator.

var add = 10 + 5;
console.log(add);//15

//Subtract One number from another

var sub = 50 - 25;
console.log(sub);//25

//Multiply two numbers

var mul = 10 * 5;
console.log(mul);//50

//Divide one number by other

var div = 25 / 5;
console.log(div);//5

//Increment a number using both pre and post increment.

var num = 10;
++num;
console.log(num);//11
num++;
console.log(num);//12

//What will be the output of the following program.

var i = 4;
var j = 21;
var k = ++i * 7 +2 - j--;
console.log(k);//16

//Write a program to get remainder of 17 divided by 3.

var rem = 17 % 3;
console.log(rem);//2

//Declare a string variable and log the typeof of variable.

var FirstName = 'Meiazhagan';
console.log(typeof FirstName);//string

//Print a string “ Alan said, “Peter is learning Javascript” ”(ignore first and last quote) use escape character.

var str = "Alan said, \"Peter is learning javascript\"."
console.log(str);

//Concat two strings using plus operator.

var fname = "Shri";
var lname = "Prakash";
console.log(fname + " " + lname);//Shri Prakash

//Concat two strings using plus equal (+=) operator.

var name1 = "Hi";
var name2 = "Shano";
console.log(name1 += name2);//HiShano

//Append a number variable to string.

var str1 = "Shano";
var n1 = 7;
console.log(str1 + n1);//Shano7

//Store multiples values in one variable using JS array.

var arr = [10,20,"Shri",5,"Prakash"];
console.log(arr);

//Verify a variable is an array using is Array() method. 
console.log(Array.isArray(arr));//true

//Find the length of an array
console.log(arr.length);//5

//Create an array with five elements and access the 3rd element using indexes.

var  arr1 = [1,2,3,4,5];
console.log(arr1[2]);//3

//Create an array with 10 elements and then update the 5th and 6th position with new values using index.

var  arr2 = [10,20,30,40,50,60,70,80,90,100];
console.log(arr2);
arr2[4] = 150;
arr2[5] = 200;
console.log(arr2);

//Add a element to an existing array using push() method.

arr2.push(250);
console.log(arr2);





