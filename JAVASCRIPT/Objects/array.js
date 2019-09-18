let names = ["a","b","c"];

let results = new Array(12,13,14);

console.log(names);

console.log(results);

let prices = new Array(23);

console.log(prices);//creates an empty array with 23 spaces

console.log(results.length);//33

console.log(results.push(60));//4
console.log(results);

console.log(results.pop());//60

console.log(results);//12

console.log(results.shift());//removes first element in an array

console.log(results);

console.log(results.unshift(54));//add an elemen at the start of your array

console.log(results);

let unsorted = [5,7,3,11,45,32]

//et sorted = unsorted.sort();

//console.log(sorted);//[11, 3, 32, 45, 5, 7] --> not works properly

//slice --> shows the elements within the given index
console.log(unsorted.slice(1,5));//[7, 3, 11, 45]

//splice --> deletes the element within the given index

let fruits = ['apple', 'mango', 'orange', 'cherry', 'banana'];

console.log(fruits.splice(1,3,'strawberry','sapota'));//["mango", "orange", "cherry"]

console.log(fruits);//["apple", "strawberry", "sapota", "banana"]

//Join --> converts your array into a string

console.log(fruits.join());//apple,strawberry,sapota,banana

console.log(fruits.join(' '));//["apple", "strawberry", "sapota", "banana"]

//Exercise "I am learning JS" --> IalJ  

let numbers = [25,34,87,12,67,53];

//forEach() is used to iterate your  arrays one by one
numbers.forEach(function(ele,ind,arr){
    console.log("Element", ele);
    console.log("Index", ind);
    console.log("Array", arr);
});

let frnds =  ["vijay","bala","hari","raj","vickey","mei"];

for (x of frnds)
{
    console.log(x);
}
