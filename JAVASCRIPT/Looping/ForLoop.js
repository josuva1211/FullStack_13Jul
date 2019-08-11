for (var i = 2; i <= 10; i++)
{
   // console.log("2 * " + i + " = " +2 * i);
   for (var j = 1; j<=10; j++)
   {
    console.log(`${i} * ${j} = ${i * j}`);
   } 
   
}

//Print all the even Numbers from 1 to 100
for (num = 1; num <= 100; num++)
{
    if (num % 2 == 0)
    {
        console.log(num);
    }
}

//Print the count of even numbers from 1 to 100
var count = 0;
for (num = 1; num <= 100; num++)
{
    if (num % 2 == 0)
    {
        count++;
    }
}

console.log(count);//50

//Print the values in the array using for loop
var arr = [10,20,30,40,50]

for (var i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

//Multiply the array values with 2 and push them in a new array and print the array
var arr2 = [];
for (var i = 0; i < arr.length; i++)
{
    /*var NewVal = arr[i]*2;
    arr2.push(NewVal)*/

    arr2[i] = arr[i] * 2;
}

console.log(arr2);//[20,40,60,80,100]


var arr3 = [];
for (var i = arr.length - 1; i >= 0; i--)
{
    var NewVal1 = arr[i];
    arr3.push(NewVal1);//[50,40,30,20,10]
    //arr3[i] = arr[i];//[10,20,30,40,50]
}

console.log(arr3);



