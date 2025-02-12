// Inicializar EmailJS con tu clave de usuario
emailjs.init("zkVQqxEFSJz276nvd");

// Enviar el formulario con EmailJS
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Enviar el formulario usando la plantilla configurada en EmailJS
    emailjs.sendForm('service_7m005dn', 'template_z5o7nmn', this)
        .then(function (response) {
            console.log("Correo enviado correctamente", response);
            // Mensaje de éxito, con estilo llamativo
            document.getElementById("msg").innerText = "¡🎉 Mensaje enviado con éxito! 🎉";
            document.getElementById("msg").style.color = "#4CAF50"; // Verde para éxito
            document.getElementById("msg").style.fontSize = "18px";
            document.getElementById("msg").style.fontWeight = "bold";
            document.getElementById("msg").style.textAlign = "center";
            document.getElementById("msg").style.backgroundColor = "#e7f7e7";
            document.getElementById("msg").style.padding = "10px";
            document.getElementById("msg").style.borderRadius = "5px";

            // Limpiar el formulario después de enviar el mensaje
            document.getElementById("contactForm").reset();
        }, function (error) {
            console.log("Error al enviar el correo", error);
            // Mensaje de error, con estilo llamativo
            document.getElementById("msg").innerText = "😞 Hubo un error al enviar el mensaje. Intenta nuevamente.";
            document.getElementById("msg").style.color = "#f44336"; // Rojo para error
            document.getElementById("msg").style.fontSize = "18px";
            document.getElementById("msg").style.fontWeight = "bold";
            document.getElementById("msg").style.textAlign = "center";
            document.getElementById("msg").style.backgroundColor = "#ffebe6";
            document.getElementById("msg").style.padding = "10px";
            document.getElementById("msg").style.borderRadius = "5px";
        });
});
