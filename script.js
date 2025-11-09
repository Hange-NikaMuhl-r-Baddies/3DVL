console.log("🚀 Welcome to 3D Visionary Lab!");

// Neon glow for buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.boxShadow = "0 0 25px #0ff, 0 0 50px #f0f";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.boxShadow = "none";
  });
});

// Smooth scroll for nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
fadeEls.forEach(el => observer.observe(el));
