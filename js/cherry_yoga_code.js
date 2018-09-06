//menu responsive
document.querySelector('.menu-mobile-icon').addEventListener('click',
function(e){
    var header = document.querySelector(".header");
    if (header.style.display === "none" || header.style.display === "") {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }  
    e.preventDefault();
})

//footer settings
document.querySelector('.arrow-up').addEventListener('click',
function(e){
    var footer = document.querySelector('body');
    footer.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
    e.preventDefault();
});





