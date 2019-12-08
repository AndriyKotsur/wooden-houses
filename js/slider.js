"use strict";
let slideIndex = 1;

function showSlides(n) {
    let slides = document.querySelectorAll(".slides-item");

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
};
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
};
