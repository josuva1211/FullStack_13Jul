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

let {name:firstName, age, education} = person;//This is equal to person.name

console.log(firstName);//Josuva
console.log(age);//30
console.log(education);
