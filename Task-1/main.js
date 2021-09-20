
//Navbar part

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



//Gallery carousel part  
let thumbnail = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')
for(var i=0;i<thumbnail.length;i++){
    thumbnail[i].addEventListener('mouseover',function(){
        document.getElementById('featured').src = this.src
    })
}
let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');
buttonLeft.addEventListener('click',function(){
    document.getElementById('slider').scrollLeft -=70
})
buttonRight.addEventListener('click',function(){
    document.getElementById('slider').scrollLeft +=70
})