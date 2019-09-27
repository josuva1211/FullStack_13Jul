let btn = document.querySelector('button');

function handler(e) 
{
    alert("First Handler");
}

function handler2(e) 
{
    alert("Second Handler");
}

function handler3(e)
{
    alert("Third Handler");
    btn.removeEventListener('click', handler3);
}

/*btn.onclick = handler;
btn.onclick = handler2;--> This onclick method will execute the the handler2 function because onclick func 
will override the above function and will trigger only once*/ 

//with addEventListener function you can perform multiple triggers
btn.addEventListener('click', handler );
btn.addEventListener('click', handler2 );
btn.addEventListener('click', handler3 );