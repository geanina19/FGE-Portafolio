function showLoader(event) {
    // Prevenir que el comportamiento predeterminado de la acción del clic ocurra
    event.preventDefault();

    // Mostrar el overlay con los spinners
    const loaderOverlay = document.getElementById('loaderOverlay');
    loaderOverlay.style.display = 'flex';

    // Esperar 3 segundos (3000 ms) antes de proceder con el redireccionamiento
    setTimeout(function () {
        // Redirigir a la URL deseada directamente
        window.location.href = 'https://computacioncuanticayeany.netlify.app/';  // URL específica para redirigir
    }, 400); 
}
