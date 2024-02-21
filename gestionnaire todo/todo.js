var button =document.querySelector("button");
button.addEventListener('click',addtodo);
function addtodo(){
    var name=document.querySelector('#name');
    var content=document.querySelector('#content');
    var n=name.value;
    var c=content.value;
    var li=document.createElement("li");
    li.textContent="Name: " + n + ", Content: " + c;
    var ul=document.querySelector("ul");
    ul.appendChild(li);     
    name.value="";
    content.value="";
}
function addbutton(){
    var b=document.createElement("button");
    b.textContent="done";
    var ul=document.querySelector("ul");
    ul.appendChild(li);     
    name.value="";
    content.value="";
}


