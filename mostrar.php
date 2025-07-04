<?php

    include "conexion.php";
    $sql="SELECT * FROM producto";
    $result = $conn->query($sql);

    if($result->num_rows>0){
        while ($row = $result->fetch_assoc()){
            echo "<tr>".
                    "<td>" . $row["nombre"] . "</td>" . 
                    "<td>" . $row["cantidad"] . "</td>" . 
                    "<td>" . $row["precio"] . "</td>" . 
                    "<td>" . "<img width='200' src=" . $row["imagen"] . ">" . "</td>" . 
                    "<td>" . $row["detalles"] . "</td>" . 
                    "<td>" . "<button class='Eliminar' data-id='".$row["id"]. "'>Eliminar</button>"
                            . "<button>Actualizar</button>"
                    . "</td>" . 

                "</tr>";

        }
}else {
    echo "<p>No hay productos.</p>";
};
    
?>

