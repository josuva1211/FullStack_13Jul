var ResultShri = [50,20,50];
console.log(ResultShri);
console.log(typeof ResultShri);//Object
console.log(ResultShri[1]);//20

var A = ResultShri[2];
console.log(A)//50

var A = ResultShri[4];
console.log(A)//Undefined

var Social = 45;
ResultShri[3] = Social;
console.log(ResultShri);

//Add a value to a random index
ResultShri[10] = 67;//If you create a random index far from acual index then the array will create empty spaces
console.log(ResultShri);

//Update a value in an array
ResultShri[1] = 2;
console.log(ResultShri);

//To check the length of an array
console.log(ResultShri.length);//11

//You can add any no of datatypes to an array
var arr = ['Hello', 13, true, [12,13]];
console.log(arr);
console.log(arr[3]);

//push() and pop()

arr.push('world');//Add the value at the last in the array
console.log(arr);

arr.pop();//Removes the last element in your array
console.log(arr);



