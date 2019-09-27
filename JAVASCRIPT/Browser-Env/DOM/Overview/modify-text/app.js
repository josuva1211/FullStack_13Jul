let para = document.querySelector("p");

console.log(para);

//With innerText property you cannot render the page using HTML tags
//para.innerText = "<p>I am learning JS</p>";

//With innerHTML property you can render the page using HTML tags
para.innerHTML = "Hello world <p>I am learning JS</p>";

console.log(para.innerText);//I am learning JS

console.log(para.innerHTML);//Hello world <p>I am learning JS</p>

console.log(para.textContent);//Hello world I am learning JS

para.innerText += ". I am a great";//Append to  the same line with previous text

//para.innerHTML += ". I am a great";//Append to the next line

para.outerText = "<p>Hii </p>"

//para.outerHTML = "<p>How are you?<p>";