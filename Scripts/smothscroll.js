// Encuentra todos los enlaces internos
const links = document.querySelectorAll('a[href^="#"]');

// Agrega un controlador de eventos a cada enlace
links.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Función para realizar el desplazamiento suave
function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // Elimina el "#" del href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Agrega el comportamiento de desplazamiento suave
        });
    }
}
