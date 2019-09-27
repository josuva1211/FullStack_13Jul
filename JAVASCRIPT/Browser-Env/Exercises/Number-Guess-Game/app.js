let GuessPara = document.querySelector(".guesses");
let LastResultPara = document.querySelector(".lastResult");
let LowOrHiPara = document.querySelector(".lowOrHi");
//Generating a random num
//console.log(LastResultPara)
let RandomNum = parseInt(100 * Math.random());
let UserIP = document.getElementById("guessField");
console.log(RandomNum);

//Validation on guess submit

let Guessbtn = document.getElementById("Sub");
let TryAgainBtn = document.getElementById("TryAgain");
let Counter = 0;

Guessbtn.onclick = function (e) {
    e.preventDefault();
    //Get the guess value
    let GuessVal = document.getElementById("guessField").value;
    if (Counter == 0)
    {
        GuessPara.innerHTML = "Previous Guessess : "
    }

    if (Counter < 10)
    {
        if (GuessVal > RandomNum)
        {
            console.log("Too High");
            GuessPara.innerText += " " + GuessVal;
            LastResultPara.innerText = "Wrong";
            LastResultPara.style.backgroundColor = "red";
            LowOrHiPara.innerText = "Value is too High";
            
        }
        else if (GuessVal < RandomNum)
        {
            console.log("Too Low");
            GuessPara.innerText += " " + GuessVal;
            LastResultPara.innerText = "Wrong";
            LastResultPara.style.backgroundColor = "red";
            LowOrHiPara.innerText = "Value is too Low";
            
        }
        else
        {
            console.log("Equal")
            GuessPara.innerText += " " + GuessVal;
            LastResultPara.innerText = "Correct";
            LastResultPara.style.backgroundColor = "green";
            Guessbtn.disabled = true;
            TryAgainBtn.style.display = "block";
            
        }
        Counter++;
        UserIP.value = "";
        UserIP.focus();
    }
    else
    {
        Guessbtn.disabled = true;
        LastResultPara.innerText = "Game Over";
        LastResultPara.style.backgroundColor = "red";
        TryAgainBtn.style.display = "block";
        UserIP.value = "";
        UserIP.focus();
    }
    
}

TryAgainBtn.addEventListener("click", RestartGame);

function RestartGame()
{
    GuessPara.remove();
    LastResultPara.remove();
    LowOrHiPara.remove();
    TryAgainBtn.style.display = "none";
    Guessbtn.disabled = false;
    Counter = 0;
    location.reload();
}

/*TryAgainBtn.onclick = function(e) {
    e.preventDefault();
    GuessPara.remove();
    LastResultPara.remove();
    LowOrHiPara.remove();
    TryAgainBtn.style.display = "none";
    Guessbtn.disabled = false;
}*/

//backgroundColor