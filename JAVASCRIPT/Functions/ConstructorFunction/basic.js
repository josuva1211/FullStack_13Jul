//Without  Constructor function
function Person(name, age)
{
    console.log(this);//window
    this.name = name;
    this.age = age;
    console.log(this);//window
}

let js = Person("JS", 20);

console.log(js);//undefined

//With constructor function using new keyword

function Person(name, age)
{
    console.log(this);//person{}
    this.name = name;
    this.age = age;
    this.desc = function() {
        console.log(this.name,this.age);
    }
    console.log(this);//person{}
    //return {};return an empty object
}

let js1 = new Person("JS", 20);
let shano = new Person("SHri", 23);

console.log(js1);//person{}
console.log(shano);//person{}
console.log(js1.age);//20

shano.desc();//SHri 23

function Student(name,year,course)
{
    console.log(this);//Student Object with empty values
    this.name = name;
    this.year = year;
    this.course = course;
    console.log(this);//Student object with values added
}

//Function is also an object
let stu1 = new Student("shri",2014,"IT");
console.log(stu1);//Student object with values added
console.log(stu1.course);//IT

console.log(Student.length);//3

console.log(Student.constructor);

console.log(stu1.constructor);

console.log(Student.prototype);

console.log(typeof Student.prototype);//object

Student.prototype.gender = "Male";

let stu2 = new Student("mano",2016,"IT");

console.log(stu2);

console.log(stu2.name);//mano

console.log(stu2.gender);//male

console.log(stu1.gender);//male

console.log(stu1.hasOwnProperty("gender"));//false

console.log(stu1.constructor.hasOwnProperty("gender"));//false

console.log(stu1.constructor.prototype.hasOwnProperty("gender"));//true

console.log(typeof stu1.year);//number

let yr = stu1.year.toString();

console.log(typeof yr);//string

console.log(stu1.hasOwnProperty("toString"));//false

console.log(stu1.constructor.hasOwnProperty("toString"));//false

console.log(stu1.constructor.prototype.hasOwnProperty("toString"));//false

console.log(stu1.constructor.prototype.constructor.prototype.hasOwnProperty("toString"));//false

console.log(Object.hasOwnProperty("tostring"));

console.log(Object.constructor.hasOwnProperty("tostring"));


