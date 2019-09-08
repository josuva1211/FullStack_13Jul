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

//Keys convert your object into an array
let keys = Object.keys(person);

console.log(keys);//["name", "age", "gender", "married", "hobbies", "address", "education", "friends"]

for (var i = 0; i < keys.length; i++)
{
    console.log(person[keys[i]]);//gives the values of every key
}

//forEach
Object.keys(person).forEach(function(ele, ind, arr){
    console.log(ele, person[ele]);
});

for (var key of Object.keys(person)) {
    console.log(person[key])
};

//for in loop

for (var prop in person) 
{
    if(person.hasOwnProperty(prop))
    {
        console.log('for in', person[prop])
    }
}



