//document

console.log(window.document);

console.log(window.document.documentElement);

console.log(document.documentElement.childNodes);//[head, text, body]

//accessed body
console.log(document.documentElement.childNodes[2]);

console.log(document.documentElement.childNodes[2].childNodes);//[text, h1, text, p, text, div, text, p, text, script]

console.log(document.documentElement.childNodes[2].childNodes[3]);

document.documentElement.childNodes[2].childNodes[3].innerText = "This is a dynamic text inserted";

document.documentElement.childNodes[2].childNodes[3].style.color = "red";

//Why React is Fast --> Whenever your page is loaded It also creates a duplicate DOM with the original DOM 
//and whenever the page is rendered it compares both the DOM's and the differences are only updated to the
//already available Duplicate DOM.
