<?php
header('Content-Type: application/json');

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"] ?? '';
    $correo = $_POST["correo"] ?? '';
    $asunto = $_POST["asunto"] ?? '';
    $mensaje = $_POST["mensaje"] ?? '';

    if (mail("geanina8148@gmail.com", $asunto, $mensaje, "From: $nombre <$correo>")) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Método no permitido"]);
}
?>