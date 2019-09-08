let primitive = "This is a primitive string";

let strobj = new String("this is an object");

console.log(typeof primitive);//string

console.log(typeof strobj);//object

console.log(primitive.length);//26

console.log(strobj.length);//17

//If you try to access a property which is of primitive types then it will convert it into an object and 
//can access the property and finally will destroy the object for the variable.

console.log(new Boolean(''));//false

console.log(new Boolean(new String('')))//true
//Uppercase
console.log(primitive.toUpperCase());
//Indexing
console.log(primitive[2]);//i
//CharAt()
console.log(primitive.charAt(6));//s
//indexOf()
console.log(primitive.indexOf('i', 6));//12--starting looking from 6
//lastIndexOf()
console.log(primitive.lastIndexOf('i'));//23
//substring()
console.log(primitive.substring(0,6));//This i -->doesnt consider last char but considers first char
//split -> converts string into array
console.log(primitive.split(''));//["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "p", "r", "i", "m", "i", "t", "i", "v", "e", " ", "s", "t", "r", "i", "n", "g"]
console.log(primitive.split(' '));// ["This", "is", "a", "primitive", "string"]

var commaCSV = "a,b,c,d";
console.log(commaCSV.split(','));//["a", "b", "c", "d"]

console.log(primitive.concat(' This is a concated string'));

//Program to shorten your string to 5 chars

function shorten(str)
{
    return str.substring(0,6);
}

console.log(shorten("Hi how are you??"));

String.prototype.shorten = function() {
    console.log("This is a shorten function");
    console.log(this);

    return this.substring(0,6);

}

let short = primitive.shorten();

console.log('shorten value',short);

let anotherstr = strobj.shorten()

console.log(anotherstr);