"use strict";
window.addEventListener('load', function () {
    /* BURGER */
    let button = document.querySelector('.header-burger');
    let buttonMenu = document.querySelector('.header-menu')
    button.addEventListener('click', function () {
        button.classList.toggle('active');
        buttonMenu.classList.toggle('active');
    });
    let menuLinks = document.querySelectorAll('.header-menu-list-link');
    menuLinks.forEach(function (menuLinks) {
        menuLinks.addEventListener('click', function () {
            button.classList.toggle('active');
            buttonMenu.classList.toggle('active');
        });
    })

/* SLIDER */
let slideIndex = 1;

function showSlides(n) {
    let slides = document.querySelectorAll(".sliderItems");
    let dots = document.querySelectorAll(".dot-items");
    if (slides.length == 0) {
        return false;
    } else if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    };
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-items-active", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-items-active";
};

showSlides(slideIndex);
/* PREV BTN */
let prevBtn = document.querySelector('.prevBtn');
if (prevBtn) {
    prevBtn.addEventListener('click', function () {
        showSlides(slideIndex -= 1);
    });
}
/* NEXT BTN */
let nextBtn = document.querySelector('.nextBtn');
if (nextBtn) {
    nextBtn.addEventListener('click', function () {
        showSlides(slideIndex += 1);
    });
}
/* SLIDESHOW */
let sliderGallery = document.querySelector('.sliderGallery');
if (sliderGallery) {
    sliderGallery.addEventListener('click', function () {
        let slider = event.target.closest('img');
        let arrSlides = [];
        arrSlides[slider.id - 1] = slider;
        let idx = arrSlides.indexOf(slider);
        showSlides(slideIndex = ++idx);
    });
}

/* DOTS CONTROL */
let sliderDots = document.querySelector('.sliderDots'); sliderDots.addEventListener('click', function () {
    let dot = event.target.closest('span');
    let arrDots = [];
    arrDots[dot.id - 1] = dot;
    let idx = arrDots.indexOf(dot);
    showSlides(slideIndex = ++idx);
})
})