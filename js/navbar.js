document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a"); // Selecciona todos los links dentro del nav

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que el link navegue de manera tradicional

      const targetId = link.getAttribute("href"); // Obtiene el ID del destino
      const targetSection = document.querySelector(targetId); // Busca la sección correspondiente

      if (targetSection) {
        const navbarHeight = document.querySelector("nav").offsetHeight; // Altura de la navbar
        const sectionPosition = targetSection.offsetTop - navbarHeight; // Ajusta la posición para no tapar la sección

        window.scrollTo({
          top: sectionPosition, // Mueve la página hasta la sección
          behavior: "smooth", // Con efecto suave
        });
      }
    });
  });
});
//*********************************************************************************************************************** */
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger"); // Botón hamburguesa
  const navMenu = document.querySelector("nav ul"); // Menú de navegación
  const navLinks = document.querySelectorAll("nav ul li a"); // Todos los links

  function toggleMenu() {
    hamburger.classList.toggle("active"); // Activa/desactiva animación del icono
    navMenu.classList.toggle("active"); // Muestra/oculta el menú

    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden"; // Evita scroll cuando el menú está abierto
    } else {
      document.body.style.overflow = "auto"; // Permite scroll cuando el menú está cerrado
    }
  }

  hamburger.addEventListener("click", toggleMenu); // Click en hamburguesa abre/cierra menú

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu(); // Cierra menú al hacer clic en un link
      }
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideNav = event.target.closest("nav"); // Detecta si el clic fue dentro del nav

    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      toggleMenu(); // Cierra menú si se clickea fuera
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active"); // Quita animación
      navMenu.classList.remove("active"); // Cierra menú
      document.body.style.overflow = "auto"; // Permite scroll
    }
  });
});
//**************************************************************************************************************** */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href")); // Sección destino
    if (target) {
      const offsetTop = target.offsetTop - 100; // Ajuste de 100px desde arriba

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Scroll suave
      });
    }
  });
});
