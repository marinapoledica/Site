var pictures = [
    '<img value="0" class="portrait" src="./assets/pictures/3.jpg">', 
    '<img value="1" class="portrait" src="./assets/pictures/4.jpg">', 
    '<img value="2" class="landscape" src="./assets/pictures/6.jpg">', 
    '<img value="3" class="landscape" src="./assets/pictures/7.jpg">', 
    '<img value="4" class="landscape" src="./assets/pictures/8.jpg">', 
    '<img value="5" class="landscape" src="./assets/pictures/9.jpg">', 
    '<img value="6" class="landscape" src="./assets/pictures/10.jpg">', 
    '<img value="7" class="portrait" src="./assets/pictures/11.jpg">', 
    '<img value="8" class="landscape" src="./assets/pictures/12.jpg">', 
    '<img value="9" class="portrait" src="./assets/pictures/13.jpg">', 
];


var temp = pictures[0];
var tr = 0;
var gal = document.querySelector('.slide-show');



gal.innerHTML = temp;

document.querySelector('.prev').addEventListener('click', 
function(e){
    if(tr === 0){
        tr = pictures.length -1;
    } else {
        tr = pictures.indexOf(temp) -1;
    }
    temp = pictures[tr];
    gal.innerHTML = temp;
});


document.querySelector('.next').addEventListener('click',
function(e){
    if(tr === pictures.length-1){
        tr = 0;
    } else {
        tr =  pictures.indexOf(temp) +1;
    }
    temp = pictures[tr];
    gal.innerHTML = temp;
});

