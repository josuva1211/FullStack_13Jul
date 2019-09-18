//setTimeOut()-->Accepts 2 parameter, first para is a callback fn and second para is time
//Example for Asynchronous
console.log("Program Starts");

/*setTimeout(function() {
    console.log("Time Expired");
}, 2000);

console.log("Program Ends");

for (let i = 0; i < 4; i++)
{
    setTimeout(function() {
        console.log(i);//4
    }, 3000);
}*/

//setInterval()
//Executes the function based on the time given
let counter = 1;

let Interval = setInterval(function() {
    console.log("Program Iterates");

    if (counter == 5)
    {
        clearInterval(Interval);
    }
    counter++;
}, 1000);

console.log(Interval);

console.log("Program Ends");