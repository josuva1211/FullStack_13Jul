let hobbies = ['cricket', 'coding', 'music', 'friends', 'travel'];
let list = document.querySelector("ul");


/*for (var i = 0; i < hobbies.length; i++)
{
    list.innerHTML += `<li>${hobbies[i]}</li`;
}*/

//Alternative way using map

list.innerHTML = hobbies.map(ele => `<li>${ele}</li>`).join("");