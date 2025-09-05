function joinCommunity() {
    window.location.href = "Formulario.html";
}

function learnMore() {
    alert("Conoce más sobre nuestras experiencias, mentorías y programas de liderazgo.");
}

function discoverPrograms() {
    alert("Explora todos nuestros programas diseñados para líderes auténticas.");
}

function startTransformation() {
    alert("¡Es momento de iniciar tu camino hacia un liderazgo auténtico!");
}

function openContact() {
    alert("Abre el formulario de contacto o correo para conversar.");
}

function EnviarFormulario() {
    window.location.href = "Formulario.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const floatElements = document.querySelectorAll(".animate-float");
    floatElements.forEach(el => {
        el.style.transition = "transform 0.5s ease-in-out";
    });
});
