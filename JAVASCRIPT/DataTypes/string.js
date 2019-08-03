//var fname = abc;//Error Msg var abc is not defined

var name = "shano";
console.log(name);
console.log(typeof name);

var str = "I'm learning 'JS' ";
console.log(str);

var str1 = "I'm learning \"JS\" ";//Use of Escape Characters
console.log(str1);

var para = "Hello, Learning FullStack Development.\nThat Includes JS, CSS, HTML."
console.log(para);// \n is used to switch to new line.

// \t => tab

var un = "This is a unicode characters \u221E";//221E refers to infinity
console.log(un);

var FirstName = "Shri";
var LastName = "Prakash";
var age = 23;
var FullName = FirstName + " " + LastName; // + is used to concatenate the string values

console.log(FullName);

var NewStr = "Hello I'm " + FullName + " and I am " + age + " years old";
console.log(NewStr);

var str3 = "Hello" + 10;// This is called type Cohersion
console.log(str3);//Hello10
console.log(typeof str3);//String

var str4 = "Hi" + true;
console.log(str4);//Hitrue
console.log(typeof str4);//string

var BoolNum = 10 + true;
console.log(BoolNum);//11
console.log(typeof BoolNum);//number

//ES6  

//String Literal

var lit = `This is a string`;
console.log(lit);
console.log(typeof lit);


var NewStr1 = `Hello I'm ${FirstName} ${LastName}. 
I'm ${age} years old`;
console.log(NewStr1);//Refer NewStr OP and you will see the difference that with the current OP you dont 
//want to add concatenation operators and escape characters.