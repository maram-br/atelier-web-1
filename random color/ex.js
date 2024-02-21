var element =document.querySelector('.ol');
element.addEventListener('click',(e)=>{
    if (e.target.tagName === 'LI') {
        e.target.style.color =randomcolor();}
    });

function randomcolor(){
    var x=Math.floor(Math.random()*256);
    var y=Math.floor(Math.random()*256);
    var z=Math.floor(Math.random()*256);
    return 'rgb(' + x + ',' + y + ',' + z + ')';
}



















