//let a = 10;

//when you try to console a var which is undefined it will throw an error and blocks further execution
/*console.log(b);
console.log(a);*/

//To overcome this and to to execute the further code use try catch block
//Try catch block comes in handy when you know that an error occurs at a particular place and you can handle 
//that situation with try catch block

let a = 10
//throw new Error("My Own Error");--> this code line will throw error and stops further execution

/*try {
    //console.log(b);
    throw new Error("Password Wrong");//user  could  understand by passing your own error messages
} catch (error) {
    console.log(error.message);
    console.log(error.stack);
}*/

try {
    //throw new Error("Something went wrong!");
    console.log("Hi")
} catch (error) {
    console.log(error);
}
finally {
    let b = 20;
    console.log("finally in", b);
}

//finally block is an optional where it executes if there is an error in your block
//if there is an error in your try block it catches the error and finally is executed then.
//If there is no error in try block then it goes to the finally block and executes its code. 

console.log(a);