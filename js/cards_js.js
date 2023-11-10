
let Open_i = document.querySelector('.Open_i');
let Open_e = document.querySelector('.Close_i');

let input_box_info = document.querySelector('.input_box_info');
let input_box_requirements = document.querySelector('.input_box_requirements');


Open_i.onclick = function(){
    Open_i.className = (this.className === 'Open_i')?' Open_i':'Open_i';
    Open_e.className = 'Close_i';
    input_box_requirements.style.display = "none";
    input_box_info.style.display = "block";
}
Open_e.onclick = function(){
    Open_e.className = (this.className === 'Open_i')?' Open_i':'Open_i';
    Open_i.className = 'Close_i';
    input_box_info.style.display = "none";
    input_box_requirements.style.display = "block";
}






