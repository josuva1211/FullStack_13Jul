
//Convert Celsius to Fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    
    console.log(fahrenheit);//68
   }

   convertToF(20);

//Factorialize a Number

function factorial(n)
{
    let tot = 1;
    for (var i = n; i > 0; i--)
    {
        tot *= i;
    }

    console.log(tot)
}

factorial(10);

//Return Largest Numbers in Arrays

var arr = [ [3,4,5,1],  [5,6,7,2,8], [4,5,6,8,3], [45,65,78] ]
var FinArr = []

for (var i = 0; i < arr.length; i++)
{
    var arr2 = arr[i];
    arr2.sort();
    var arr2len = arr2.length;
    var arr3 = arr2[arr2len - 1];
    FinArr.push(arr3);
}

console.log(FinArr);

//Repeat a String

var  str1 = "";
function repeatStringNumTimes(str, n)
{
    
    for (var i = 0; i < n; i++)
    {
         str1 += str;
    }

    console.log(str1);
}

repeatStringNumTimes("abc", 5);

//Boo who

function booWho(bool)
{
    if (typeof bool === "boolean")
    {
        console.log(true);
    }
    else    
    {
        console.log(false);
    }
}

booWho(false);
booWho([1, 2, 3]);

//Title Case a Sentence

function TitleCaseSentence(str)
{
    var strArr = str.split(" ");
    var strArr2 = [];
    //console.log(strArr);
    for (var i = 0; i < strArr.length; i++)
    {
        var CapArr = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
        strArr2.push(CapArr);
    }

    var CapStr = strArr2.join(" ");

    console.log(CapStr);
}


/*var lower = 'this is an entirely lowercase string';
var upper = lower.charAt(0).toUpperCase() + lower.substring(1);

console.log(upper);*/
TitleCaseSentence("hi i am shri prakash");

//Falsy Bouncer

function bouncer(arr)
{
    var arr2 = [];
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i])
        {
            arr2.push(arr[i]);
        }
        //console.log(false);
    }

    console.log(arr2);
}

bouncer([7, "ate", "", false, 9]);

   
   