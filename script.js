console.log("Website loaded successfully!");

function setupModal(linkId, modalId, closeId) {
    const link = document.getElementById(linkId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);

    link.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("open");
        }
    });
}

setupModal("aboutLink", "aboutModal", "aboutClose");
setupModal("contactLink", "contactModal", "contactClose");

const slides = document.querySelectorAll("#heroSlider .slide");
const dots = document.querySelectorAll("#slideDots .dot");
let currentSlide = 0;
let slideTimer;

function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

function startSlideTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

document.getElementById("nextSlide").addEventListener("click", () => {
    goToSlide(currentSlide + 1);
    startSlideTimer();
});

document.getElementById("prevSlide").addEventListener("click", () => {
    goToSlide(currentSlide - 1);
    startSlideTimer();
});

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        goToSlide(Number(dot.dataset.index));
        startSlideTimer();
    });
});

startSlideTimer();

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
});

navMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
    }
});
