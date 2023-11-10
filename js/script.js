'use strict';

/*================== Animations ==================*/

AOS.init();


/*
catalog_button.addEventListener('click', function (){
    catalog.style.display = 'flex';
});
*/




/*================= Catalog =================*/

let catalog_button = document.querySelector('.button_catalog');
let catalog = document.querySelector('.catalog');
let firs_screen = document.querySelector('.first_screen');

let isMenuShow = false;
let isLoginShow = false;

catalog_button.addEventListener("click", function() {
    if (isMenuShow)
    {
        catalog.style.display = 'none';
        catalog_button.style.background = "none";
        catalog_button.style.color = "#FFFFFF";
        isMenuShow  = false;
        body.style.overflowY = 'visible';
    }
    else
    {
        catalog.style.display = 'flex';
        catalog_button.style.background = "#FFFFFF";
        catalog_button.style.color = "black";
        isMenuShow  = true;
        login.style.display = 'none';
        log_in.style.background = "none";
        log_in.style.color = "#FFFFFF";
        isLoginShow = false;
        body.style.overflowY = 'hidden';
    }
});











/*============== Login and register =============*/

let login_open = document.querySelector('.Open');
let register_open = document.querySelector('.Close');

let input_box_login = document.querySelector('.input_box_login');
let input_box_register = document.querySelector('.input_box_register');


login_open.onclick = function(){
    login_open.className = (this.className === 'Open')?' Open':'Open';
/*    if (login_open.className === 'Open'){
        login_open.className = 'Open'
    }else
    {
        login_open.className = 'Open'
    }*/

    register_open.className = 'Close';
    input_box_register.style.display = "none";
    input_box_login.style.display = "flex";
}
register_open.onclick = function(){
    register_open.className = (this.className === 'Open')?' Open':'Open';
    login_open.className = 'Close';
    input_box_login.style.display = "none";
    input_box_register.style.display = "flex";
}



let log_in = document.querySelector('.button_login');
let login =document.querySelector('.login');
let body = document.querySelector('body');


log_in.addEventListener("click", function (){
    if (isLoginShow)
    {
        /*overflow-y:hidden;*/
        login.style.display = 'none';
        isLoginShow  = false;
        log_in.style.background = "none";
        log_in.style.color = "#FFFFFF";
        body.style.overflowY = 'visible';
    }
    else
    {
        login.style.display = 'flex';
        isLoginShow  = true;
        log_in.style.background = "#FFFFFF";
        log_in.style.color = "black";
        catalog.style.display = 'none';
        catalog_button.style.background = "none";
        catalog_button.style.color = "#FFFFFF";
        isMenuShow =false;
        body.style.overflowY = 'hidden';
    }
    input_box_login.style.display = "flex";

});

let all = document.querySelectorAll('.first_screen, .two_screen, .three_screen, ' +
    '.fourth_screen, .fourth_screen, .first_screen, .footer, .content')


function close_login(){
    catalog.style.display = "none";
    isMenuShow  = false;
    catalog_button.style.background = "none";
    catalog_button.style.color = "#FFFFFF";
    body.style.overflowY = 'visible';
}
function close_catalog(){
    login.style.display = "none";
    isLoginShow  = false;
    log_in.style.background = "none";
    log_in.style.color = "#FFFFFF";
    input_box_login.style.display = "none";
    input_box_register.style.display = "none";
    login_open.className = 'Open';
    register_open.className = 'Close';
    body.style.overflowY = 'visible';
}

window.onclick = function (event) {
    if (event.target === firs_screen) {
        close_login();
    }
    if (event.target === firs_screen) {
        close_catalog();
    }
    for (let i = 0; i < all.length; i++) {
        if (event.target === all[i]) {
            close_login();
            close_catalog();
        }
    }
};



/*================== Close catalog-login =====================*/


let button_up = document.querySelector('.up');
let button_down = document.querySelector('.down');

let box = document.querySelectorAll('.box_slider');



/*for (let elem in box){
    box[elem].addEventListener('mouseover', function (){
        box[elem].style.background = 'blue';
        box[elem].style.display = 'none';
    });
}*/


/*================= Mini Slider ====================*/

function anim_up(){
    for (let i = 0; i < box.length; i++){
        box[i].style.animation = `anim_up ${1.5}s forwards`;
    }
}
function anim_down(){
    for (let i = 0; i < box.length; i++){
        box[i].style.animation = "anim_down 1.5s forwards";
    }
}

let slideIndex = 1;
showSlides(slideIndex);
anim_up();


/*function currentSlide(n) {
    showSlides(slideIndex = n);
}*/

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".container_box");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
/*
    slides[slideIndex - 1].setAttribute('data-aos', 'fade-down');
    slides[slideIndex - 1].classList.add("anim");
*/
}

let liner_mini = document.querySelector('.liner_mini');

button_up.addEventListener("click", function() {
    showSlides(slideIndex -= 1);
    anim_down();
    examination_liner();
    clearInterval(start_auto_view);
    start_auto_view = setInterval(auto_view, 8000);
});

button_down.addEventListener("click", function() {
    showSlides(slideIndex += 1);
    anim_up();
    examination_liner();
    clearInterval(start_auto_view);
    start_auto_view = setInterval(auto_view, 8000);
});

function examination_liner (){
    if (slideIndex === 1){
        liner_mini.style.marginTop = '0px';
    }
    if (slideIndex === 2){
        liner_mini.style.marginTop = '73px';
    }
    if (slideIndex === 3){
        liner_mini.style.marginTop = '146px';
    }
}

function auto_view() {
    showSlides(slideIndex += 1);
    examination_liner();
}
let start_auto_view = setInterval(auto_view, 8000);







/*============== Header fourth Screen =============*/


let header_button_off = document.querySelectorAll('.off');
let screen = document.querySelectorAll('.screen_off');

header_button_off[0].className = 'on';
screen[0].className = 'screen_on';



for (let i = 0; i < header_button_off.length; i++){
    header_button_off[i].onclick = function(){
        let header_button_on = document.querySelector('.on');
        let screen_on = document.querySelector('.screen_on');

        header_button_off[i].className = (this.className === 'on')?' on':'on';
        screen[i].className = (this.className === 'screen_on')?' screen_on':'screen_on';

        if (header_button_off[i].className === 'on'){
            header_button_on.className = 'off';
            screen_on.className = 'screen_off';
        }
        else {
            header_button_on.className = 'on';
            screen_on.className = 'screen_on';
        }
    }
}







/*=============================== fourth_screen =======================================*/

let bs_button = document.querySelector('.bs_button');
let screen_off_hidden = document.querySelector('.screen_off_hidden');
let screen_on_hidden = document.querySelector('.screen_on_hidden');


let bs_button_tf = true;
bs_button.onclick = function() {
    if (bs_button_tf){
        screen_off_hidden.className = 'screen_on_hidden';
        bs_button.innerHTML = "Скрыть";
        bs_button_tf = false;
    }
    else {
        screen_off_hidden.className = 'screen_off_hidden';
        bs_button.innerHTML = "Смотреть все";
        bs_button_tf = true;
    }
}









/*=================== Big Slider ===================*/

let button_up_big = document.querySelector('.up_big');
let button_down_big = document.querySelector('.down_big');

let slider_box_big_left = document.querySelectorAll('.slider_box_big_left');
let slider_box_big_right = document.querySelectorAll('.slider_box_big_right');

function anim_up2(){
    for (let i = 0; i < slider_box_big_left.length; i++){
        slider_box_big_left[i].style.animation = `anim_up ${1.5}s forwards`;
    }
    for (let i = 0; i < slider_box_big_right.length; i++){
        slider_box_big_right[i].style.animation = "anim_down 1.5s forwards";
    }
}
function anim_down2(){
    for (let i = 0; i < slider_box_big_right.length; i++){
        slider_box_big_right[i].style.animation = `anim_up ${1.5}s forwards`;
    }
    for (let i = 0; i < slider_box_big_left.length; i++){
        slider_box_big_left[i].style.animation = "anim_down 1.5s forwards";
    }
}

let slideIndex2 = 1;
showSlides2(slideIndex);
anim_up2();


/*function currentSlide(n) {
    showSlides(slideIndex = n);
}*/

function showSlides2(n) {
    let i;
    let slides = document.querySelectorAll(".content_box_big");

    if (n > slides.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "flex";
    /*
        slides[slideIndex - 1].setAttribute('data-aos', 'fade-down');
        slides[slideIndex - 1].classList.add("anim");
    */
}

let liner_mini_big = document.querySelector('.liner_mini_big');

button_up_big.addEventListener("click", function() {
    showSlides2(slideIndex2 -= 1);
    anim_down2();
    examination_liner2();
    clearInterval(start_auto_view_big);
    start_auto_view_big = setInterval(auto_view2, 8000);
});

button_down_big.addEventListener("click", function() {
    showSlides2(slideIndex2 += 1);
    anim_up2();
    examination_liner2();
    clearInterval(start_auto_view_big);
    start_auto_view_big = setInterval(auto_view2, 8000);
});

function examination_liner2 (){
    if (slideIndex2 === 1){
        liner_mini_big.style.marginTop = '0px';
    }
    if (slideIndex2 === 2){
        liner_mini_big.style.marginTop = '73px';
    }
    if (slideIndex2 === 3){
        liner_mini_big.style.marginTop = '146px';
    }
}

function auto_view2() {
    showSlides2(slideIndex2 += 1);
    examination_liner2();
}
let start_auto_view_big = setInterval(auto_view2, 8000);
























































































































