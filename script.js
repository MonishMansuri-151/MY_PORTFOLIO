// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Custom Cursor Movement
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Cursor Scale on Hover
const links = document.querySelectorAll("a, .card, .skill-tag, .btn");
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
    cursor.style.background = "rgba(145, 94, 255, 0.1)";
  });
  link.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "transparent";
  });
});

// Resume Modal Logic
const modal = document.getElementById("resume-modal");
const resumeBtn = document.getElementById("resume-menu");
const closeBtn = document.querySelector(".close-modal");

resumeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("active"), 10);
});

const closeModal = () => {
  modal.classList.remove("active");
  setTimeout(() => (modal.style.display = "none"), 500);
};

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(5, 8, 22, 0.95)";
    nav.style.padding = "15px 10%";
  } else {
    nav.style.background = "rgba(5, 8, 22, 0.85)";
    nav.style.padding = "20px 10%";
  }
});
