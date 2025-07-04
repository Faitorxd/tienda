<?php

    include "conexion.php";

    $nombre=$_POST["nombre"];
    $cantidad=$_POST["cantidad"];
    $precio=$_POST["precio"];
    $imagen=$_POST["imagen"];
    $detalles=$_POST["detalles"];

    $sql="INSERT INTO producto(id,fecha_creacion, nombre, cantidad , precio , imagen , detalles)
        VALUES ( NULL, NULL,'$nombre','$cantidad' , '$precio' , '$imagen' , '$detalles' )
    ";

    if($conn->query($sql) == TRUE){
        echo "La conexion exitosa";
    }

?>