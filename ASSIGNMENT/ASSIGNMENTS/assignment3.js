//Reverse a String

function reverse(str)
{
    var  StrArr = str.split("");
    //console.log(StrArr);
    var reverseStrArr = StrArr.reverse();
    //console.log(reverseStrArr);
    var reverseStr = reverseStrArr.join("");
    console.log(reverseStr);
}

reverse("ShanoShri");

//Confirm the Ending

function confirmEnding(str, target)
{
    var  StrArr = str.split(" ");
    console.log(StrArr);
    var StrArrLen = StrArr.length;

    if (StrArr[StrArrLen - 1] === target)
    {
        console.log("Target Matches");
    }
    else
    {
        console.log("Target doesn't Match");
    }
}

confirmEnding("He has to give me a new name", "name");

//Where do I Belong

function getIndexToIns(arr, num)
{
    var sortArr = arr.sort();
    for (var i = 0; i < sortArr.length; i++)
    {
        if (num < sortArr[i])
        {
            //sortArr.push(num);
            console.log("I belong to the index ", i)
            break;
        }
    }
    console.log(sortArr);
}


getIndexToIns([10, 20, 40, 50], 30) 

//Mutations

function CheckLetters(str1, str2)
{
    var str1Arr = str1.split(" ");
    console.log(str1Arr);
    var str2Arr = str2.split("");
    console.log(str2Arr);
    var Count = 0;

    for (var i = 0; i <str2Arr.length; i++)
    {
        if (str1Arr.indexOf(str2Arr[i]) !== -1)
        {
            Count++
        }
    }

    if (Count > 0)
    {
        console.log(false);
    }
    else
    {
        console.log(true);
    }
}

CheckLetters("Hai", "ai");