let username = prompt("Please enter your name?");
let para = document.querySelector("p");

username = username.replace(/^\s+/, '').replace(/\s+$/, '');
console.log(username);

//console.log(username.charAt(0));
if (username === "")
{
    para.innerText = `Name cannot contain whitesapce character`;
}
else if (username)
{
    para.innerText = `Welcome ${username}`;
}
else
{
    para.innerText = `Please enter your name`;
}
