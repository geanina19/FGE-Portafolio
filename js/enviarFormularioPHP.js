document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
        } else {
            event.preventDefault(); // Evitar envío por defecto

            const formData = new FormData(form);

            // Usar fetch para enviar los datos al servidor
            fetch("../php/recibirEmail.php", {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        // Mostrar alerta de éxito
                        alert("¡Gracias por contactarnos! Serás redirigido a la página principal.");
                        window.location.href = "../html/principal.html"; // Redirigir al usuario
                    } else {
                        alert("Ocurrió un error al enviar tu mensaje. Por favor, inténtalo nuevamente.");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    // alert("Ocurrió un error inesperado. Por favor, inténtalo nuevamente.");
                });
        }
    });
});
