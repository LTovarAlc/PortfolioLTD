document.addEventListener("DOMContentLoaded", function () {
    const contactLinks = document.querySelectorAll(".contactLink");
    const contactModal = document.getElementById("contactModal");
    const modalContent = contactModal.querySelector(".modal__content");
    const closeModalButton = contactModal.querySelector(".close");
  
    contactLinks.forEach(function (contactLink) {
      contactLink.addEventListener("click", function () {
        contactModal.style.display = "block";
        contactModal.style.top = "50%";
        contactModal.style.left = "50%";
        contactModal.style.transform = "translate(-50%, -50%)";
        
        // Agrega una clase al cuerpo de la página
        document.body.classList.add("modal-open");
      });
    });
  
    closeModalButton.addEventListener("click", function () {
      contactModal.style.display = "none";
      
      // Remueve la clase del cuerpo al cerrar el modal
      document.body.classList.remove("modal-open");
    });
});
