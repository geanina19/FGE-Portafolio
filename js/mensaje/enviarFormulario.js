// Inicializar EmailJS con tu clave de usuario
emailjs.init("zkVQqxEFSJz276nvd");

// Enviar el formulario con EmailJS
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    // Obtener el valor del campo de correo
    const email = document.getElementById("correo").value;

    // Expresión regular para validar el formato del correo
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validar el correo electrónico
    if (!emailRegex.test(email)) {
        // Si el correo no es válido, mostrar un mensaje de error
        document.getElementById("msg").innerText = "Por favor, ingresa un correo electrónico válido con '@' y '.'";
        document.getElementById("msg").style.color = "#f44336"; // Rojo para error
        document.getElementById("msg").style.fontSize = "18px";
        document.getElementById("msg").style.fontWeight = "bold";
        document.getElementById("msg").style.textAlign = "center";
        document.getElementById("msg").style.backgroundColor = "#ffebe6";
        document.getElementById("msg").style.padding = "10px";
        document.getElementById("msg").style.borderRadius = "5px";
        return; // Detener el envío del formulario si el correo es inválido
    }

    // Enviar el formulario usando la plantilla configurada en EmailJS si el correo es válido
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
