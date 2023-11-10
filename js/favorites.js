"use strict";



let favorites_box = document.querySelector('.favorites_box');

let img2 = document.querySelectorAll('.img_box>img');
let name_games2 = document.querySelectorAll('.name_games');
let discounts_price2 = document.querySelectorAll('.discounts_price');
let discounts2 = document.querySelectorAll('.discounts');


let button_favorites = document.querySelectorAll('.button_favorites');



let product_save2 = localStorage.getItem('save_favorites');

let j2 = 0;


let obj2 = {};


for (let i = 0; i < button_favorites.length; i++){
    button_favorites[i].addEventListener('click', function (){

        obj2[j2]= {
            'img': img2[i].getAttribute('src'),
            'name': name_games2[i].innerHTML,
            'dis_price': discounts_price2[i].innerHTML,
            'dis': discounts2[i].innerHTML
        }
        j2++;
        localStorage.setItem('save_favorites', JSON.stringify(obj2));
    })
}





let favorites_boxx = document.querySelector('.favorites_box');

let quantity_header2 = document.querySelector('.quantity_header');

let out_price2 = document.querySelector('.payment_price');

let text2 = '';
function search2(s) {
    return s.indexOf('../') >= 0;
}
function push_core2() {
    let k = JSON.parse(localStorage.getItem('save_favorites'));
    Object.keys(k).forEach(function(key) {
        if (search2(this[key].img) === true){
            text2 = '';
        }
        else {
            text2 = '../';
        }

        favorites_boxx.innerHTML += `<div class="box_product">
            <img src="${text2}${this[key].img}" alt="">
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
push_core2();




let dellete2 = document.querySelectorAll('.delete');
let box_product2 = document.querySelectorAll('.box_product');

for (let i = 0; i < dellete2.length; i++){
    dellete2[i].addEventListener("click", function (){
        let k = JSON.parse(localStorage.getItem('save_favorites'));

        Object.keys(k).forEach(function(key) {
            delete k[i];
            localStorage.setItem('save_favorites', JSON.stringify(k));
        }, k);
        box_product2[i].remove();
    });
}



