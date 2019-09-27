let userName = prompt("Please enter your name?");

if (userName)
{
    let p = document.createElement("p");
    p.innerText = userName;

    //document.body.appendChild(p);

    let p2 = document.querySelector("p");

    document.body.insertBefore(p, p2);
}