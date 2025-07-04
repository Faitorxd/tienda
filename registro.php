<?php
    include "conexion.php";

    $correo = $_POST["email"];
    $contrasena = $_POST["password"];

    $sql = "INSERT INTO usuarios(id,fecha_creacion,correo,contrasena)
    VALUES ( NULL, NULL,'$correo','$contrasena' )
    ";

    if($conn->query($sql) == TRUE){
        echo "La conexion exitosa";
    }


?>