console.log(this);//Window

//Window is a global object.

var MyName = "Shano";
//After creatin a var with a name the var will be added to the window object
console.log(MyName);//Shano

console.log(window.MyName);//Shano

function foo()
{
    console.log('from function',this);
}

//function call points to the global obj
foo();

//this keyword points to the current object

var obj = {
    name: "js",
    desc: function() {
        console.log(this);
    }
}

//method call points to the current obj
obj.desc();


let obj1 = {
    name: 'JS',
    desc: function() {
        console.log(this);
        function inner() {
            console.log(this);
        }
        inner();
    }
}

obj1.desc();//Points to the global window because your method call function calls the function call