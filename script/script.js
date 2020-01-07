"use strict";
window.addEventListener('load', function () {
    /* BURGER */
    let button = document.querySelector('.header-burger');
    let buttonMenu = document.querySelector('.header-menu')
    button.addEventListener('click', function () {
        button.classList.toggle('active');
        buttonMenu.classList.toggle('active');
    });

/* SLIDER */
let slideIndex = 1;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slideshow = document.querySelector('.slideshow-row');
let arrSlides = [];
let dotSlides = document.querySelector('.slider-dots');
let arrDots = [];

function showSlides(n) {
    let slides = document.querySelectorAll(".slides-item");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    };
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active","")   
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " dot-active";
};

showSlides(slideIndex);
/* PREV BTN */
prev.addEventListener('click', function () {
    showSlides(slideIndex -= 1);
});
/* NEXT BTN */
next.addEventListener('click', function () {
    showSlides(slideIndex += 1);
});
/* SLIDESHOW */
slideshow.addEventListener('click', function () {
    let slider = event.target.closest('img');
    arrSlides[slider.id-1] = slider;
    let idx = arrSlides.indexOf(slider);
    showSlides(slideIndex = ++idx);
});
/* DOTS CONTROL */
dotSlides.addEventListener('click', function(){
    let dot = event.target.closest('span');
    arrDots[dot.id-1] = dot;
    let idx = arrDots.indexOf(dot);
    showSlides(slideIndex= ++idx);
})
})