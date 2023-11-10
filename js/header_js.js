'use strict';



let LOG_IN = document.querySelector('.LOG_IN');
let icon_profile = document.querySelector('.icon_profile');
let button_login = document.querySelector('.button_login');



let favorites = document.querySelector('.favorites');
let basket = document.querySelector('.basket');


let value = localStorage.getItem('i');


if (value === "false"){
    button_login.style.display = "none";
    icon_profile.style.display = "block";
    favorites.style.display = "block";
    basket.style.display = "block";
}

LOG_IN.addEventListener("click", function (){
    button_login.style.display = "none";
    icon_profile.style.display = "block";
    favorites.style.display = "block";
    basket.style.display = "block"


    localStorage.setItem('i', 'false');
    login.style.display = "none";
});




let out = document.querySelector('.out');
out.addEventListener("click", function () {
    out_func()
});

function out_func(){
    button_login.style.display = "block";
    icon_profile.style.display = "none";
    localStorage.setItem('i', 'true');
}










