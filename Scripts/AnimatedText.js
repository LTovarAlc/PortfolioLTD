// Obtén los elementos del texto animado
const animatedTextElements = [
    document.getElementById("animatedText1"),
    document.getElementById("animatedText2"),
    document.getElementById("animatedText3"),
    document.getElementById("animatedText4"),
    document.getElementById("animatedText5")
  ];
  
  // Función para ajustar y mostrar el texto línea por línea
  function adjustAndAnimateText() {
    let lineIndex = 0;
  
    function displayNextLine() {
      if (lineIndex < animatedTextElements.length) {
        // Aplica la animación al elemento actual
        const animatedText = animatedTextElements[lineIndex];
        animatedText.style.animation = 'typing 2s steps(60), blink .5s infinite step-end alternate';
  
        lineIndex++;
  
        // Desplázate hacia abajo después de un breve retraso
        setTimeout(displayNextLine, 2000); // Ajusta este valor según la duración de tu animación
      }
    }
  
    displayNextLine();
  }
  
  // Ajusta y muestra el texto línea por línea al cargar la página
  window.addEventListener("load", adjustAndAnimateText);
  