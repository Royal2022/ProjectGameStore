'use strict';


/*============== Header Profile Screen =============*/


/*let button_off_profile = document.querySelectorAll('.off_profile');



button_off_profile[0].className = 'on_profile';
button_profile_on_and_off();



function button_profile_on_and_off(){
    for (let i = 0; i < button_off_profile.length; i++){
        button_off_profile[i].onclick = function(){
            let button_on_profile = document.querySelector('.on_profile');


            button_off_profile[i].className = (this.className === 'on_profile')?' on_profile':'on_profile';

            if (button_off_profile[i].className === 'on_profile'){
                button_on_profile.className = 'off_profile';
            }
            else {
                button_on_profile.className = 'on_profile';
            }
        }
    }
}*/









let button_off_profile = document.querySelectorAll('.off_profile');
let screen2 = document.querySelectorAll('.favorites_off');

button_off_profile[0].className = 'on_profile';
screen2[0].className = 'favorites_on';
button_profile_on_and_off();

function button_profile_on_and_off() {

    for (let i = 0; i < button_off_profile.length; i++) {
        button_off_profile[i].onclick = function () {
            let button_on_profile = document.querySelector('.on_profile');
            let screen_on = document.querySelector('.favorites_on');

            button_off_profile[i].className = (this.className === 'on_profile') ? ' on_profile' : 'on_profile';
            screen2[i].className = (this.className === 'favorites_on') ? ' favorites_on' : 'favorites_on';

            if (button_off_profile[i].className === 'on_profile') {
                button_on_profile.className = 'off_profile';
                screen_on.className = 'favorites_off';
            }
            else {
                button_on_profile.className = 'on_profile';
                screen_on.className = 'favorites_on';
            }
        }
    }
}



