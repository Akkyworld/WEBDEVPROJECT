// Smooth scroll for navbar links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


// Change navbar background on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    if (window.scrollY > 80) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


// Fade-in animation for sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll("section").forEach(sec => observer.observe(sec));


// Newsletter form validation
const emailInput = document.querySelector(".contact input");
const subscribeBtn = document.querySelector(".contact button");

subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value;

    if (email === "") {
        alert("Please enter an email address.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email format.");
        return;
    }

    alert("Thank you for subscribing!");
    emailInput.value = "";
});


// Hero CTA button animation
const ctaButton = document.querySelector(".hero .btn");

ctaButton.addEventListener("mouseenter", () => {
    ctaButton.style.transform = "scale(1.08)";
});

ctaButton.addEventListener("mouseleave", () => {
    ctaButton.style.transform = "scale(1)";
});

console.log("TravelVista Website Loaded Successfully");
