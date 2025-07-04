<?php
    $server = "localhost";
    $user = "root";
    $db="tienda4";
    $paswword ="";

    $conn = new mysqli($server,$user,
    $paswword,
    $db);

    if($conn->connect_error){
        die("Se muriooooooooooooo" . $conn->connect_error);
    }



?>