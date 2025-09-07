// Inicializa EmailJS con tu User ID / Public Key
emailjs.init("5II775cZYsyqYXW1I");

// Selecciona el formulario por clase
const form = document.querySelector(".form-contacto");
const boton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página
  boton.textContent = "Enviando...";

  // Envía el formulario usando tu Service ID y Template ID
  emailjs.sendForm("service_r99xs1k", "template_fk36tow", this).then(
    () => {
      boton.textContent = "Enviado";
      form.reset(); // Limpia todos los campos
      setTimeout(() => {
        boton.textContent = "Enviar";
      }, 3000);
    },
    (err) => {
      alert("Error al enviar mensaje: " + err.text);
      boton.textContent = "Enviar";
    }
  );
});
