const targets = Array.from(document.querySelectorAll('.js-scroll-trigger'));
const navbar = document.getElementById('mainNav');
const slide = document.getElementById('slide');
var timeOut;

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("Btn-Go-to-Top").style.display = "block";
    } else {
        document.getElementById("Btn-Go-to-Top").style.display = "none";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const closeResponsiveMenu = () => {
    let navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        navbar.classList.add('hide');
    }
}

const targetsFunctions = (element, e) => {
    closeResponsiveMenu();
}

targets.map(el => {
    el.addEventListener('click', (e) => targetsFunctions(el.hash, e))
});


function mOver(obj) {
    obj.src = "img/IE2.jpeg";
}

function mOut(obj) {
    obj.src = "img/IE1.jpeg";
}

function mClick(obj) {
    obj.src = "img/IE3.jpeg";
}


function iniciarSlide() {
    slide.src = "img/lab_1.jpeg";
    timeOut = setTimeout("continuarSlide()", 2000);
}

function continuarSlide() {
    slide.src = "img/lab_2.jpeg";
    timeOut = setTimeout("iniciarSlide()", 2000);
}

function pararSlide() {
    clearTimeout(timeOut);
    slide.src = "img/lab_1.jpeg";
}

const gabriel = document.querySelector(".gabriel");
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const whoiam = document.querySelector("#subtitle");
const p1 = document.querySelector("#text1");
const p2 = document.querySelector("#text2");
const nl1 = document.querySelector("#nav-link1");
const nl2 = document.querySelector("#nav-link2");
const nl3 = document.querySelector("#nav-link3");

const tl = new TimelineMax();

tl.fromTo(gabriel, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(gabriel, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
    .fromTo(slider1, 1.2, { x: "-100%" }, { x: '0%', ease: Power2.easeInOut }, "-=1.2")
    .fromTo(slider2, 1.2, { x: "-100%" }, { x: '0%', ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(nl1, 0.6, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(nl2, 0.7, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(nl3, 0.8, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(hamburger, 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(headline, 0.8, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=1.2")
    .fromTo(p1, 0.8, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(whoiam, 0.8, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(p2, 0.8, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, "-=0.5");