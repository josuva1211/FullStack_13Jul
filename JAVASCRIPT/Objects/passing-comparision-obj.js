let obj = {
    name: 'JS',
    version: 'ES5'
}

let obj2 = obj;

obj2.version = 'ES6';
//This is because both the objects points to the same reference
console.log(obj.version);//ES6
console.log(obj2.version);//ES6

//To avoid This
let obj3 = {};//Creates new object and reference

Object.assign(obj3, obj);//Assign is to inherit the properties but the changes are not reflected

console.log(obj3);

obj3.version = 'ES7';

console.log(obj3.version);//ES7
console.log(obj.version);//ES6

let person1 = {
    name: 'bottle',
    console: 'blue'
}

let person2 = {
    name: 'bottle',
    console: 'blue'
}

console.log(person1 == person2);//false --> Points to two different references

//To check the key - value pairs of two objects are equal
//JSON.stringify() is used to convert your JS object to JSON object
console.log(JSON.stringify(person1) == JSON.stringify(person2));//true
