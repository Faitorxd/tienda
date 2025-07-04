<?php

    include "conexion.php";

    $correo = $_POST["correo"];
    $password = $_POST["contrasena"];

    $sql = "SELECT correo , contrasena FROM usuarios 
        WHERE correo = '$correo' AND  contrasena = '$password'
    ";

    $result = $conn->query($sql);

    if($result->num_rows > 0){
        echo "Exitoso";
    }else{
        echo "Fallo";
    };





?>