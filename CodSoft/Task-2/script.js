let number1 = document.getElementById('number1');
let counter1 = 0;
setInterval(() => {
    if(counter1 == 70){
        clearInterval;
    }
    else{
        counter1+=1;
        number1.innerHTML = `${counter}%`;
    }
}, 30);

let number2 = document.getElementById('number2');
let counter2 = 0;
setInterval(() => {
    if(counter2 == 65){
        clearInterval;
    }
    else{
        counter2+=1;
        number2.innerHTML = `${counter}%`;
    }
}, 30);

let number3 = document.getElementById('number3');
let counter3 = 0;
setInterval(() => {
    if(counter3 == 50){
        clearInterval;
    }
    else{
        counter3+=1;
        number3.innerHTML = `${counter}%`;
    }
}, 30);

let number4 = document.getElementById('number4');
let counter4 = 0;
setInterval(() => {
    if(counter4 == 75){
        clearInterval;
    }
    else{
        counter4+=1;
        number4.innerHTML = `${counter}%`;
    }
}, 30);

let number5 = document.getElementById('number5');
let counter5 = 0;
setInterval(() => {
    if(counter5 == 65){
        clearInterval;
    }
    else{
        counter5+=1;
        number5.innerHTML = `${counter}%`;
    }
}, 30);

let number6 = document.getElementById('number6');
let counter6 = 0;
setInterval(() => {
    if(counter6 == 60){
        clearInterval;
    }
    else{
        counter6+=1;
        number6.innerHTML = `${counter}%`;
    }
}, 30);

const section=document.querySelectorAll('section')
const navlink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    var header=document.querySelector('header')
    header.classList.toggle("sticky",window.scrollY>100)
    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')
};

let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

 