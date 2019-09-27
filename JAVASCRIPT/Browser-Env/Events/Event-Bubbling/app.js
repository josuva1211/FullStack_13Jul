let ul = document.querySelector('ul');
let li = document.getElementById("firstList");
let anhr = document.getElementById("firstAnchor");

//Event Bubbling triggers the previous parent elements events upto the root of the HTML
ul.onclick = function(e)
{
    alert("UL clicked")
}

li.onclick = function(e)
{
    e.stopPropagation();
    alert("LI clicked")
}

anhr.onclick = function(e)
{
    e.stopPropagation();
    alert("Achor clicked")
}