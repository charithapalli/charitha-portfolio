(() => {
  const root = document.documentElement;
  const themeBtn = document.querySelector(".theme");
  const year = document.getElementById("year");
  const toggle = document.querySelector(".nav__toggle");
  const navList = document.getElementById("navList");

  // Footer year
  year.textContent = new Date().getFullYear();

  // Theme (default: dark)
  const stored = localStorage.getItem("theme");
  if (stored === "light") root.setAttribute("data-theme", "light");

  themeBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  // Mobile nav
  const closeMenu = () => {
    navList.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const open = navList.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  navList?.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") closeMenu();
  });

  // Close menu on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
