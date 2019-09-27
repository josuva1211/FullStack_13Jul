let anchor = document.querySelector("a");

anchor.onclick = function(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target);//points to your element
    console.log(this);//points to an element in which you are performing an event
    alert("Hello");
}