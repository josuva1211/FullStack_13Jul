let body = document.body;

let btn = document.querySelector("button");

btn.onclick = function() {
    body.style.backgroundColor = "rgb(" + randomNum(0,255) + ", " + randomNum(0,255) + ", " + randomNum(0,255) + ")";
}

function randomNum(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
}

//body.style.backgroundColor = `rgba(${randomNum(0,255)}, ${randomNum(0,255)}, ${randomNum(0,255)})`;


//body.style.backgroundColor = "rgb(" + randomNum(0,255) + ", " + randomNum(0,255) + ", " + randomNum(0,255) + ")";