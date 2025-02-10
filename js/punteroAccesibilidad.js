document.addEventListener('DOMContentLoaded', function() {
    const mouse = document.getElementById('mouse'); // Puntero en la página
    let mouseX = window.innerWidth / 2; // Coordenada inicial X
    let mouseY = window.innerHeight / 2; // Coordenada inicial Y
    const speed = 10; // Velocidad de movimiento del puntero

    // Mueve el puntero a las nuevas coordenadas
    function moveMouse() {
        mouse.style.left = `${mouseX}px`;
        mouse.style.top = `${mouseY}px`;
    }

    // Mover el puntero con las teclas
    document.addEventListener('keydown', function(event) {
        // Mover el puntero usando las teclas W, A, S, D
        if (event.key === 'w' || event.key === 'W') {
            mouseY = Math.max(0, mouseY - speed);
        } else if (event.key === 'a' || event.key === 'A') {
            mouseX = Math.max(0, mouseX - speed);
        } else if (event.key === 's' || event.key === 'S') {
            mouseY = Math.min(window.innerHeight - 20, mouseY + speed); // Asegúrate de que el puntero no se salga
        } else if (event.key === 'd' || event.key === 'D') {
            mouseX = Math.min(window.innerWidth - 20, mouseX + speed); // Asegúrate de que el puntero no se salga
        }

        // Simulación del clic al presionar ENTER
        if (event.key === 'Enter') {
            // Obtener el elemento debajo del puntero
            const elementAtPointer = document.elementFromPoint(mouseX + 10, mouseY + 10); // Ajustamos las coordenadas ligeramente

            // Verificar si el elemento debajo es un botón o un enlace
            if (elementAtPointer) {
                if (elementAtPointer.tagName === 'BUTTON' || elementAtPointer.tagName === 'A') {
                    console.log('Simulando clic en el elemento:', elementAtPointer);
                    elementAtPointer.click(); // Simula el clic en el elemento
                } else {
                    console.log('No se ha encontrado un botón o enlace debajo del puntero');
                }
            }
        }

        moveMouse(); // Actualizar la posición del puntero
    });

    moveMouse(); // Inicializa la posición del puntero
});
