'use strict';


let toggle = document.querySelector('.toggle');
let slider = document.querySelector('.slider');
let prover = true;


toggle.addEventListener('click', function (){
    if (prover)
    {
        toggle.className += " active";
        slider.style.transform = "translateX(24px)";
        prover = false;
    }
    else {
        toggle.className = "toggle";
        slider.style.transform = "translateX(0)";
        prover =true;
    }
});


let left_payment_method = document.querySelector('.left_payment_method');
let right_payment_method = document.querySelector('.right_payment_method');


let slidepayment = 1;
showpayment(slidepayment)

/*function currentSlide(n) {
    showSlides(slideIndex = n);
}*/

function showpayment(n) {
    const slides = document.querySelectorAll(".m");

    if (n > slides.length) {
        slidepayment = 1
    }
    if (n < 1) {
        slidepayment = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slidepayment - 1].style.display = "flex";
}


left_payment_method.addEventListener("click", function() {
    showpayment(slidepayment -= 1);
});

right_payment_method.addEventListener("click", function() {
    showpayment(slidepayment += 1);
});









