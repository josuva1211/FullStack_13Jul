const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]; 

//Give array of Inventors First and Last name

/*let FullName = [];

for (let i = 0; i < inventors.length; i++)
{
    let name = inventors[i].first + " " + inventors[i].last;
    FullName.push(name);
}*/

/*let FullName = inventors.map(function(ele,ind,arr){
    return `${ele.first} ${ele.last}`
});*/

let FullName = inventors.map(ele => `${ele.first} ${ele.last}`)

Array.prototype.myMap = function(cb){
    let storage = [];

    for(let i = 0; i < this.length; i++)
    {
        let val = cb(this[i], i, this)
        storage.push(val);
    }

    return storage;
}

let fN = inventors.myMap(function(ele, ind, arr){
    return `${ele.first} ${ele.last}`
});

console.log(FullName);

console.log("MyMap", fN);

/*let InventorDOB = [];

for (let i = 0; i < inventors.length; i++)
{
    if (inventors[i].year >= 1500 && inventors[i].year < 1600)
    {
        InventorDOB.push(inventors[i]);
    }
}*/

/*let InventorDOB = inventors.filter(function(ele, ind, arr){
    return ele.year >= 1500 && ele.year < 1600;
});*/

let InventorDOB = inventors.filter(ele => ele.year >= 1500 && ele.year < 1600);

Array.prototype.myFilter = function(cb){
    let Storage = [];

    for (let i = 0; i < this.length; i++)
    {
        if(cb(this[i], i, this))
        {
            Storage.push(this[i]);
        }
    }
     
    return Storage;
}

let fif = inventors.myFilter(ele => ele.year >= 1500 && ele.year);

console.log("MyFilter", fif);

console.log(InventorDOB);

/*let sorted = inventors.sort(function(a,b){
    if(a.year > b.year)
    {
        return -1;
    }
    else
    {
        return 1;
    }
});*/

let sorted = inventors.sort((a,b) => a.year > b.year ? 1 : -1)

console.log("Sorted", sorted);


var arrNums = [25,65,54,12,54,255,369]
var arrTot = 0

for (var i = 0; i < arrNums.length; i++)
{
    arrTot += arrNums[i];
}

console.log(arrTot);

/*let TotalYearsLived = 0

for (var i = 0; i < inventors.length; i++)
{
    let AgeDiff = inventors[i].passed - inventors[i].year
    TotalYearsLived += AgeDiff;
}*/

/*let TotalYearsLived = inventors.reduce(function(total, ele){
    return total + ele.passed - ele.year; 
}, 0);*/

let TotalYearsLived = inventors.reduce((total, ele) => total + ele.passed - ele.year, 0);

console.log(TotalYearsLived);

let str = "I am learning JS";

let word = str.split(' ');

console.log(word);

let chrctr = word.map(e => e.charAt(0));

console.log(chrctr);

let concatChar = chrctr.join("-");

console.log(concatChar);

let res = str.split(" ").map(e => e.charAt(0)).join("-");

console.log(res);

console.log(typeof inventors);

console.log(Array.isArray(inventors));

console.log(Array.isArray(str));