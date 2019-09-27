let para = document.querySelectorAll("p")[0];//will select the 1st  para using [0] as index
let para2 = document.querySelectorAll("p")[1];//will select the 2nd para using [1] as index

let head = document.querySelector("h1");


para.style.color = 'blue';

para.style.fontSize = '20px'

/*para2.style.color = 'white';
para2.style.backgroundColor = 'black';
para2.style.fontSize = '25px';
para2.style.fontFamily = 'Verdana';*/

//Instead of the above use cssText

para2.style.cssText = 'color:white;background-color:black;font-size:25px;font-family:Verdana'

//head.classList[1] = " color";
head.className += " color";