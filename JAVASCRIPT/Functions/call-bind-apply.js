let person1 = {
    name: "Shri",
    age: 25/*,
    description: function() {
        console.log(this.name, this.age);
    }*/
}

let person2 = {
    name: "Shano",
    age: 35/*,
    description: function() {
        console.log(this.name, this.age);
    }*/
}

function description(gender, married)
{
    console.log(this.name, this.age, gender, married);
}

/*person1.description();
person2.description();*/

//call()
description.call(person1, 'Male', false);
description.call(person2, 'Female', true);

//apply() -->accepts your parameters as an array
description.apply(person1, ['Male', true]);

//bind()--> a function return a function itself and you need to call the retuned function to get the result
let desc = description.bind(person2, 'Female', true);

desc();


function add(a, b)
{
    console.log(arguments);

    Array.prototype.push.call(arguments, 6);
    //arguments.push(6);
    
    return a + b;
}

let sum = add(2, 4, 8);

console.log(sum);

