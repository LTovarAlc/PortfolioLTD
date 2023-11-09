document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
  
    // Crea 200 puntitos blancos en el fondo del body
    for (let i = 0; i < 200; i++) {
      createDot();
    }
  
    // Función para crear un puntito blanco
    function createDot() {
      const dot = document.createElement("div");
      dot.classList.add("dot");
  
      // Asigna una posición aleatoria hasta el 100% del viewport width (vw) y height (vh)
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      dot.style.left = `${x > window.innerWidth - 2 ? window.innerWidth - 2 : x}px`;
      dot.style.top = `${y > window.innerHeight - 2 ? window.innerHeight - 2 : y}px`;
  
      body.appendChild(dot);
    }
  });
  