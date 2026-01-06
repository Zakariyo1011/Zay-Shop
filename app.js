document.addEventListener('DOMContentLoaded', () => {
    // Kerakli DOM elementlarini tanlab olamiz
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const indicators = document.querySelectorAll('.indicator');
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image img');
    
    // Slayd ma'lumotlari (faqat rasmdagi birinchi slayd ma'lumotlari)
    const slides = [
        {
            h1: "Repr in voluptate",
            h2: "Ullamco laboris nisi ut",
            p: "We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.",
            imgSrc: "i.imgur.com"
        },
        // Agar keyingi slaydlar rasmini yuborsangiz, shu yerga qo'shish mumkin
        // { h1: "Keyingi sarlavha", h2: "Ikkinchi sarlavha", p: "Tavsif...", imgSrc: "rasm_linki.jpg" }
    ];

    let currentSlideIndex = 0;

    // Slaydni yangilash funksiyasi
    function updateSlide(index) {
        const currentSlide = slides[index];

        // Matn va rasmni o'zgartirish
        heroText.querySelector('h1').textContent = currentSlide.h1;
        heroText.querySelector('h2').textContent = currentSlide.h2;
        heroText.querySelector('p').textContent = currentSlide.p;
        heroImage.src = currentSlide.imgSrc;

        // Indikatorlarni yangilash
        indicators.forEach(indicator => indicator.classList.remove('active'));
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
    }

    // Chap tugma bosilganda
    leftArrow.addEventListener('click', () => {
        // currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Keyingi slaydlar uchun hisob
        // updateSlide(currentSlideIndex);
        alert("Bu yerda chapga o'tish funksiyasi ishlaydi.");
    });

    // O'ng tugma bosilganda
    rightArrow.addEventListener('click', () => {
        // currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Keyingi slaydlar uchun hisob
        // updateSlide(currentSlideIndex);
        alert("Bu yerda o'ngga o'tish funksiyasi ishlaydi.");
    });

    // Sahifa yuklanganda birinchi slaydni ko'rsatish
    updateSlide(currentSlideIndex);
});
