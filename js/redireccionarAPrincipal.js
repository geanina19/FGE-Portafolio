document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario.
  
    // Mensaje de agradecimiento.
    alert("¡Gracias por contactarnos! Serás redirigido a la página principal.");
  
    // Redirigir a principal.html.
    window.location.href = "principal.html";
  });