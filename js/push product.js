'use strict';



let core_left = document.querySelector('.core_left');

let img = document.querySelectorAll('.img_box>img');
let name_games = document.querySelectorAll('.name_games');
let discounts_price = document.querySelectorAll('.discounts_price');
let discounts = document.querySelectorAll('.discounts');


let buy_box_button = document.querySelectorAll('.buy_box_button');



let product_save = localStorage.getItem('save');

let j = 0;


let obj = {};


for (let i = 0; i < buy_box_button.length; i++){
    buy_box_button[i].addEventListener('click', function (){

        obj[j]= {
            'img': img[i].getAttribute('src'),
            'name': name_games[i].innerHTML,
            'dis_price': discounts_price[i].innerHTML,
            'dis': discounts[i].innerHTML
        }
        j++;
        localStorage.setItem('save', JSON.stringify(obj));
    })
}





let core_leftt = document.querySelector('.core_left');

let quantity_header = document.querySelector('.quantity_header');

let out_price = document.querySelector('.payment_price');

let text = '';
function search2(s) {
    return s.indexOf('../') >= 0;
}
function push_core() {
    let k = JSON.parse(localStorage.getItem('save'));
    Object.keys(k).forEach(function(key) {
        if (search2(this[key].img) === true){
            text = '';
        }
        else {
            text = '../';
        }

        core_leftt.innerHTML += `<div class="box_product">
            <img src="${text}${this[key].img}" alt="">
                <div class="box_product_right">
                    <div class="box_product_name">
                        ${this[key].name}
                    </div>
                    <div class="box_product_price">
                        <div class="price">${this[key].dis_price}</div> ₽ <div class="sale_product">${this[key].dis}</div>
                    </div>
                </div>
                <img src="../css/images/product_img/delete.png" alt="" width="18" height="18" class="delete">
        </div>`;
    }, k);
}
push_core();


function kol_ps(){
    let k = JSON.parse(localStorage.getItem('save'));

    let count = 0;
    for (let key in k) {
        count++
    }
    quantity_header.innerHTML = " ";
    quantity_header.innerHTML += count;
}
kol_ps();

function sum_ps(){
    let s = 0;
    let k = JSON.parse(localStorage.getItem('save'));
    let count = 0;
    for (let key in k) {
        count++
    }
    if (count <= 0){
        out_price.innerHTML = 0 + " ₽";
    }
    console.log(count)
    Object.keys(k).forEach(function(key) {
        s += Number(this[key].dis_price);
        out_price.innerHTML = s + " ₽";
    }, k);
}
sum_ps();


let dellete = document.querySelectorAll('.delete');
let box_product = document.querySelectorAll('.box_product');

for (let i = 0; i < dellete.length; i++){
    dellete[i].addEventListener("click", function (){
        let k = JSON.parse(localStorage.getItem('save'));

        Object.keys(k).forEach(function(key) {
            delete k[i];
            localStorage.setItem('save', JSON.stringify(k));
        }, k);
        box_product[i].remove();
        kol_ps();
        sum_ps();
    });
}






