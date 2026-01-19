/* ======================
   HERO SLIDER
====================== */

const slides = document.querySelectorAll(".hero-content");
const dots = document.querySelectorAll(".indicator");
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === i ? "flex" : "none";
        dots[idx].classList.toggle("active", idx === i);
    });
}

showSlide(index);

// arrows
document.querySelector(".right-arrow").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.querySelector(".left-arrow").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

// dots
dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        showSlide(index);
    };
});

// autoplay
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);


/* ======================
   HAMBURGER MENU
====================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 60);
});

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
