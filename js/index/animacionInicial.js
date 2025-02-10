window.onload = function() {
    // Espera 1 segundo (1000 milisegundos) después de la carga de la página para iniciar la animación del texto
    setTimeout(function() {
        const scrollingText = document.querySelector('.scrolling-text');
        if (scrollingText) {
            scrollingText.classList.add('start-animation');
        }
    }, 500); // Reduce el tiempo de espera a 500 ms (medio segundo)

    // Mostrar el video después de 1.5 segundos para evitar interferir con la animación del texto
    setTimeout(function() {
        const video = document.querySelector('.background-video');
        if (video) {
            video.style.display = "block"; // Hacer visible el video
        }
    }, 500); // Video aparece después de 1.5 segundos
};

// Agregar un evento de clic a todo el documento
document.body.addEventListener("click", function() {
    window.location.href = "html/principal.html"; // Redirige al archivo principal.html
});
