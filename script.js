// 3D Visionary Lab - Interactivity Script
console.log("🚀 Welcome to 3D Visionary Lab!");

// 🌈 Neon glow animation for buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.boxShadow = "0 0 25px #0ff, 0 0 50px #f0f";
    btn.style.transform = "scale(1.1)";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.boxShadow = "none";
    btn.style.transform = "scale(1)";
  });
});

// 🌟 Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ✨ Floating glow effect on cards
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,255,0.3), #111)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#111";
  });
});
