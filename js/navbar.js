document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = document.querySelector("nav").offsetHeight;
        const sectionPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
// JavaScript para el menú hamburguesa responsivo
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Función para toggle del menú
  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Opcional: Prevenir scroll del body cuando el menú está abierto
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  // Event listener para el botón hamburguesa
  hamburger.addEventListener("click", toggleMenu);

  // Cerrar el menú cuando se hace click en un enlace (para mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Cerrar el menú cuando se hace click fuera de él
  document.addEventListener("click", function (event) {
    const isClickInsideNav = event.target.closest("nav");

    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Cerrar el menú cuando se redimensiona la ventana
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

// Opcional: Smooth scroll mejorado para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 100; // Ajusta según la altura de tu navbar

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});
