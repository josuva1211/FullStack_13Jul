//tag-names

let headings = document.getElementsByTagName('h1');

console.log(headings);

//headings[0].innerHTML = "Heading 1";

let eleByClass = document.getElementsByClassName("para");

console.log(eleByClass);

let eleByID = document.getElementById("Hell");

console.log(eleByID);

document.getElementById("Hell").innerHTML = "How are you?";

//ID's are unique

//If you are giving the same ID name for two different tags then at the time the browser will access the first tag

//querySelector()
//querySelectorAll()
let firstHead = document.querySelector('h1');
console.log(firstHead);

let allHeadings = document.querySelectorAll('h1');
console.log(allHeadings);

let ip = document.querySelector('[type="text"]');
console.log(ip);

document.querySelector('body').style.backgroundColor = "yellow";