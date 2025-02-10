// Aseguramos que el script solo se ejecute cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Mostrar el banner cuando la página cargue
    var banner = document.getElementById("accesibilidadBanner");
    banner.style.display = "flex"; // Aseguramos que el banner esté visible

    // Función para cerrar el banner
    var closeButton = document.getElementById("closeBanner");
    closeButton.addEventListener("click", function() {
      banner.style.display = "none"; // Ocultar el banner al hacer clic en el botón
    });
  });