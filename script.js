document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const menuBtn = document.querySelector("#menuBtn");
  const mobileMenu = document.querySelector("#mobileMenu");

  let lastScrollY = window.scrollY;
  let hideTimeout;

  // Show navbar based on scroll
  window.addEventListener("scroll", () => {
    header.classList.add("visible");

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      if (window.scrollY === lastScrollY && !header.matches(":hover")) {
        header.classList.remove("visible");
      }
    }, 2000);

    lastScrollY = window.scrollY;
  });

  // Mobile menu toggle
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "flex";
    }
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
