let OuterDiv = document.getElementById("outer");
let InnerDiv = document.getElementById("Inner");
let btn = document.querySelector("button");

//Event Capturing is the opposite of Event Bubbling which starts from the root to the target element
OuterDiv.addEventListener('click', function(e) {
    alert("Outer Div Clicked");
    OuterDiv.style.border = '1px solid red';
}, true);

InnerDiv.addEventListener('click', function(e) {
    //e.stopPropagation();
    alert("Inner Div Clciked");
    InnerDiv.style.border = '1px solid green';
}, true);

btn.addEventListener('click', function(e) {
    e.stopPropagation();
    alert("Button Clicked");
    btn.style.border = '1px solid blue';
}, true);
