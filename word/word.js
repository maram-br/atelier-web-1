var text=document.querySelector("#text");
var area=document.querySelector("#div1");
text.addEventListener("input",()=>{
    var t=text.value ;
    area.innerHTML=t;
})

var c =document.querySelector("#co");
c.addEventListener("input",()=>{
    var color=c.value;
    area.style.color=color;
})

var t=document.querySelector("#ta");
t.addEventListener("input",()=>{
    var taille=t.value+"px";
    area.style.fontSize=taille;
})
var p=document.querySelector("#po");
p.addEventListener("input",()=>{
    var police=p.value;
    area.style.fontFamily=police;
})



