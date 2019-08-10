//An object is an entity which has their own properties and functionalities
//In an object you can store the value in the form of key-value pairs
//A Class is a blueprint of an object
//In JS you have an exception that you no neeed to create an class for objects where  it is a  must in other  languages.

var marks = {
    math: 20,
    science: 30,
    history: 59,
    english: 61,
    'social science': 95//If  you want to create a var with special characters then wrap the var with '' or ""
}

console.log(marks);
console.log(typeof marks);//Object

//Dot notation and Bracket Notation
console.log(marks.math);//20--> Reads the value of math property from marks object

//To update the value of the property math
marks.math = 100;
console.log(marks);

console.log(marks.physics);//undefined

//When you want to add a new property to an object
marks.physics = 70;
console.log(marks);

//to delete a property from your object

delete marks.history;
console.log(marks);

//console.log(marks.'social science');//Error --> Unexpected string

//Bracket Notation
console.log(marks['social science']);//95

var  Eng = 'english';
console.log(marks[Eng]);//61

//To create a new property or update the existing property
marks['math'] = 89;
console.log(marks);

//To access the variable and the variable will be updated using the below
marks[Eng] = 78;
console.log(marks);

var person = {
    name: 'Josuva',
    age: 30,
    gender: 'male',
    married: false,
    hobbies: ['games','movies','music'],
    address: {
        street: 102,
        place: 'hebbal'
    },
    education: [
        {
            degree: 'graduadion',
            yop: 2018,
            honor: false
        },
        {
            degree: 'hsc',
            yop: 2014,
            honor: true
        },
        {
            degree: 'ssls',
            yop: 2012,
            honor: true
        }
    ],
    friends: [
        {
            name: 'vijay',
            hobbies: ['games','movies','music']
        }
    ]
}

console.log(person.hobbies[2]);//music

console.log(person.address.place);//hebbal

console.log(person['address']['street']);//102

console.log(person.education[1].degree);//hsc

person.education[2].degree = 'sslc';
console.log(person);

//Concept --> Pass By Value
var a = 10;
var b = a;
a = 20;//Overrides the previous value
console.log(a);//20
console.log(b);//10

//Concept --> Pass By Reference
var obj1 = {
    name: "shri"
}

var obj2 = obj1;//Doesnt create new space for obj2 but will point to the address of the obj1
console.log(obj1 === obj2);//true

obj2.name = 'js';

console.log(obj1 === obj2);//true

console.log(obj2.name);//js
console.log(obj1.name);//js

var a1 = {
    name1: "shri"
}

var a2 = {
    name1: "shri"
}

console.log(a1 === a2);//false






