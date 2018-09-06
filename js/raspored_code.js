
document.querySelector('.scroll-group-training').addEventListener('click', 
function(e){
    var elmnt = document.querySelector(".schedule");
    elmnt.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    e.preventDefault();
});

document.querySelector('.scroll-ind-yoga').addEventListener('click', 
function(e){
    var elmnt = document.querySelector(".ind-yoga-txt");
    elmnt.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    e.preventDefault();
});

document.querySelector('.scroll-ind-pregnant').addEventListener('click', 
function(e){
    var elmnt = document.querySelector(".ind-preg-txt");
    elmnt.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    e.preventDefault();
});

document.querySelector('.scroll-ind-med').addEventListener('click', 
function(e){
    var elmnt = document.querySelector(".ind-med-txt");
    elmnt.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    e.preventDefault();
});

document.querySelector('.scroll-ind-rec').addEventListener('click', 
function(e){
    var elmnt = document.querySelector(".ind-rec-txt");
    elmnt.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    e.preventDefault();
});