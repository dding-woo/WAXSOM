'use strict';


//toggle menu btn
const navbarMenu = document.querySelector(".navbar__menu");
const toggleBtn = document.querySelector(".navbar__toggle__btn");

toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("toggle__menu");
});




// video modal 
const videoPlayBtn = document.querySelector(".video__contents .icon");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");


videoPlayBtn.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";

});

