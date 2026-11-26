document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".header__burger");
  const nav = document.querySelector(".nav");

  if (!burgerBtn || !nav) return;

  const setMenuState = (isOpen) => {
    burgerBtn.classList.toggle("is-active", isOpen);
    nav.classList.toggle("is-open", isOpen);
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
  };

  burgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = !nav.classList.contains("is-open");
    setMenuState(isOpen);
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideHeader = event.target.closest(".header");
    if (!clickedInsideHeader && nav.classList.contains("is-open")) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && nav.classList.contains("is-open")) {
      setMenuState(false);
    }
  });
});
