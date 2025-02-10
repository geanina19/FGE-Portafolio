
// Escuchar por los atajos de teclado
document.addEventListener('keydown', function (event) {
    // Ctrl + Shift + P
    if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        // Redirigir a la sección de proyectos
        document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
    }

    // Ctrl + Shift + S
    if (event.ctrlKey && event.shiftKey && event.key === 'S') {
        event.preventDefault();
        // Redirigir a la sección de servicios
        document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
    }

    // Ctrl + Shift + C
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
        // Redirigir a la sección de contacto
        document.getElementById('infoContacto').scrollIntoView({ behavior: 'smooth' });
    }

    if (event.ctrlKey && event.shiftKey && event.key === 'H') {
        event.preventDefault(); // Prevenir la acción por defecto (en caso de que haya alguna)
        
        // Obtener el offcanvas y abrirlo
        var myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasAccesibilidad'));
        myOffcanvas.show(); // Mostrar el offcanvas
    }

    if (event.ctrlKey && event.shiftKey && event.key === 'M') {
        event.preventDefault(); // Prevenir la acción predeterminada del navegador (si aplica)

        // Redirigir al archivo mensaje.html
        window.location.href = 'mensaje.html';
    }

    if (event.shiftKey && event.key === 'C') {
        event.preventDefault();
        // Redirigir a la sección de contacto
        document.getElementById('conocimientos').scrollIntoView({ behavior: 'smooth' });
    }

    if (event.shiftKey && event.key === 'V') {
        event.preventDefault(); // Prevenir la acción predeterminada del navegador (si aplica)

        // Redirigir al archivo mensaje.html
        window.location.href = '../documentos/FGE_CV.pdf';
    }
});

