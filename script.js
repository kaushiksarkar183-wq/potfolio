// =======================
// Typing Effect
// =======================

const text = "Aspiring Full Stack Developer";
let index = 0;

function typing() {

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,100);

    }

}

typing();


// =======================
// Scroll To Top Button
// =======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// =======================
// Mobile Menu
// =======================

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

    nav.classList.toggle("show");

};


// =======================
// Reveal Animation
// =======================

const reveals = document.querySelectorAll("section");

function revealSections() {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);

// Show visible sections immediately when the page loads
revealSections();
/* ==========================================
            TRAVEL SLIDER
========================================== */

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const dots = document.querySelectorAll(".dot");
const thumbs = document.querySelectorAll(".thumb");

const slider = document.querySelector(".travel-slider");

let current = 0;
let autoSlide;

/* Show Slide */

function showSlide(index){

    if(index >= slide.length){

        current = 0;

    }

    else if(index < 0){

        current = slide.length - 1;

    }

    else{

        current = index;

    }

    slides.style.transform =
        `translateX(-${current * 100}%)`;

    dots.forEach(dot=>dot.classList.remove("active"));

    thumbs.forEach(img=>img.classList.remove("active"));

    slide.forEach(item=>item.classList.remove("active"));

    dots[current].classList.add("active");

    thumbs[current].classList.add("active");

    slide[current].classList.add("active");

}

/* Next */

next.onclick = ()=>{

    showSlide(current+1);

}

/* Previous */

prev.onclick = ()=>{

    showSlide(current-1);

}

/* Dots */

dots.forEach((dot,index)=>{

    dot.onclick=()=>{

        showSlide(index);

    }

})

/* Thumbnail */

thumbs.forEach((img,index)=>{

    img.onclick=()=>{

        showSlide(index);

    }

})

/* Auto Slide */

function startSlider(){

    autoSlide = setInterval(()=>{

        showSlide(current+1);

    },4000);

}

/* Stop */

function stopSlider(){

    clearInterval(autoSlide);

}

/* Pause On Hover */

slider.addEventListener("mouseenter",stopSlider);

slider.addEventListener("mouseleave",startSlider);

/* Keyboard */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        showSlide(current+1);

    }

    if(e.key==="ArrowLeft"){

        showSlide(current-1);

    }

})

/* Mobile Swipe */

let startX = 0;

slider.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

})

slider.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        showSlide(current+1);

    }

    else if(endX-startX>50){

        showSlide(current-1);

    }

})

showSlide(0);

startSlider();