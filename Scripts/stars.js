document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
  
    // Crea 100 puntitos blancos en el fondo del body
    for (let i = 0; i < 100; i++) {
      createDot();
    }
  
    // Función para crear un puntito blanco
    function createDot() {
      const dot = document.createElement("div");
      dot.classList.add("dot");
  
      // Asigna una posición aleatoria al puntito
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
  
      body.appendChild(dot);
    }
  });
  