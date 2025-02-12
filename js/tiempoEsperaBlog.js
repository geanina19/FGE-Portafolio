function showLoader(event) {
    // Prevenir que el comportamiento predeterminado de la acción del clic ocurra
    event.preventDefault();

    // Verificar si ya se ha mostrado el loader en esta sesión
    if (!sessionStorage.getItem('loaderShown')) {
        // Mostrar el overlay con los spinners
        const loaderOverlay = document.getElementById('loaderOverlay');
        loaderOverlay.style.display = 'flex';

        // Marcar que el loader ya ha sido mostrado en esta sesión
        sessionStorage.setItem('loaderShown', 'true');

        // Esperar 3 segundos (3000 ms) antes de proceder con el redireccionamiento
        setTimeout(function () {
            // Redirigir a la URL deseada directamente
            window.location.href = 'https://computacioncuanticayeany.netlify.app/';  // URL específica para redirigir
        }, 400);
    } else {
        // Si el loader ya fue mostrado, solo redirigir
        window.location.href = 'https://computacioncuanticayeany.netlify.app/';
    }
}
