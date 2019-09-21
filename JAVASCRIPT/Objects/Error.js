let myError = new Error("My Error");

let SyntaxError1 = new SyntaxError("My SYnatx error");

let refErr = new ReferenceError("Reference Error");

console.log(myError);
console.log(SyntaxError1);
console.log(refErr);

//Other Type of Error  

//Eval
//InternalError
//RefernceErr
//TypeError
//URIError


//Error construction comes in handy to find out the error at the exact line
/*function foo()
{
    console.log(n);
}

function bar()
{
    joe();
}

function joe()
{
    foo();
}

bar();*/