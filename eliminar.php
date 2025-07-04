<?php

    include "conexion.php";

    $id = $_POST["id"];

    $sql = "DELETE FROM producto WHERE id = $id";

    if($conn->query($sql) === TRUE){
        echo "Se elimino correctamente";
    }

    $conn->close();



?>