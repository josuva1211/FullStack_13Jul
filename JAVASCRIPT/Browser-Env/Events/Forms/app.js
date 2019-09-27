let frm = document.querySelector('form');
let para = document.querySelector('p');
let eml = document.querySelector('input[name=email]');

frm.onsubmit = function(e) {
    e.preventDefault();
    //console.log('Working');

    let name = document.querySelector('input[name=name]').value;

    //console.log(name);

    let email = document.querySelector('input[name=email]').value;

    //console.log(email);

    let pwd = document.querySelector('input[name=password]').value;

    //console.log(pwd);

    if (!name || !email)
    {
        //alert("Please Fill up the form");
        para.innerText = "Name and email field is required";
        para.style.color = 'red';
    }
}

let IPName = document.querySelector('input[name=name]');
let EmlName = document.querySelector('input[name=email]');

IPName.onblur = function(e) {
    let value = IPName.value;

    if (!value || value.length < 3)
    {
        para.innerText = "Name field is required";
        para.style.color = 'red';
        IPName.style.border = "1px solid red";
    }
    else
    {
        para.innerText = "";
        IPName.style.border = "1px solid green";
    }
}

IPName.onfocus = function() {
    para.innerText = "Name field is Mandatory";
    para.style.color = 'red';
}

EmlName.onfocus = function() {
    para.innerText = "Email field is Mandatory";
    para.style.color = 'red';
}