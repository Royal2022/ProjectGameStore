'use strict';





/*================== like ====================*/

const click56 = document.querySelectorAll('.like1>img');
const display56 = document.querySelectorAll(".like1>.number");
let min = 1;
let max = 10;


let arr = [];

for (let i = 0; i < 3; i++)
{
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < display56.length; i++){
    display56[i].innerHTML = arr[i];
}



for (let i = 0; i < click56.length; i++){
    let t = true;
    click56[i].addEventListener('click', function (){

        if (t)
        {
            arr[i] += 1;
            display56[i].innerHTML = arr[i];
            t = false;
        }
        else {
            arr[i] -= 1;
            display56[i].innerHTML = arr[i];
            t = true;
        }

    });
}



const click2 = document.querySelectorAll('.like2>img');
const display2 = document.querySelectorAll(".like2>.number");



let arr2 = [];

for (let i = 0; i < 3; i++)
{
    arr2[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < display2.length; i++){
    display2[i].innerHTML = arr2[i];
}



for (let i = 0; i < click2.length; i++){
    let t2 = true;

    click2[i].addEventListener('click', function (){
        if (t2)
        {
            arr2[i] += 1;
            display2[i].innerHTML = arr2[i];
            t2 = false;
        }
        else {
            arr2[i] -= 1;
            display2[i].innerHTML = arr2[i];
            t2 = true;
        }
    });
}







/*================== check login ====================*/

let pass = document.querySelector('#password');
let email = document.querySelector('#email');

document.getElementById('enter').disabled = true;

pass.onblur = function (){
    if (pass.value.length >= 8 && search(email.value) === true) {
        document.getElementById('enter').disabled = false;
    }
    else {
        document.getElementById('enter').disabled = true;
    }
};
email.onblur = function (){
    if (pass.value.length >= 8 && search(email.value) === true) {
        document.getElementById('enter').disabled = false;
    }
    else {
        document.getElementById('enter').disabled = true;
    }
};



function search(s) {
    return s.indexOf('@') >= 0;
}


/*================== check register ====================*/

let fio = document.querySelector('#name_surname_reg');
let passport_date = document.querySelector('#passport_data_reg');
let email_reg = document.querySelector('#email_reg');
let password_reg = document.querySelector('#password_reg');

document.getElementById('registration').disabled = true;


password_reg.onblur = function (){
    if (password_reg.value.length >= 8 && passport_date.value.length >= 8 && fio.value.length >= 8 && search(email_reg.value) === true) {
        document.getElementById('registration').disabled = false;
    }
    else {
        document.getElementById('registration').disabled = true;
    }
};

let registration = document.querySelector('#registration');

registration.onclick = function (){
    localStorage.setItem('i', 'false');
}





