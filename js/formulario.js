emailjs.init("5II775cZYsyqYXW1I");

const form = document.querySelector(".form-contacto");
const boton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  boton.textContent = "Enviando...";

  //esta parte envia el formulario usando el id y template id ya creado:ojo  es una prueba
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
