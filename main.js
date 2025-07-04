$(document).ready(function () {
    $(".register_screen").hide()
    $("#login_screen").hide()


    $(".register_button").click(function(){
        $(".welcome_container").hide()
        $(".register_screen").show()
    })

      $(".login_button").click(function(){
        $(".welcome_container").hide()
        $("#login_screen").show()
    })




    $("#register_formulary").on("submit",function(e){
        e.preventDefault();
        

        let email = $("#email").val();
        let password = $("#password").val();
        let confirm_password = $("#confirm_password").val();


        if(password != confirm_password){
           alert("Coloca las contraseñas correctas") 
           return
        }

        $.ajax({
            type: "post",
            url: "registro.php",
            data: {
                email:email,
                password:password,
            },
            success: function (response) {
                $("#register_screen").hide()
                $("#login_screen").show()
                
            },
            error:function(error){
                console.error("Fallo algo " + error)
            }
        });
        

    })

    $("#login_formulary").on("submit" , function(e){
        e.preventDefault();

        let correo = $("#email_login").val()
        let password = $("#password_login").val()

        $.ajax({
            type:"post",
            url:"login.php",
            data:{
                correo:correo,
                contrasena:password
            },
            success:function(response){
                console.log("El inicio fue exitoso" + response)
                window.location.href = "inicio.html"
            },
        })
    })

    $("#popup_add").hide();

    $("#add").click(function (e) { 
        e.preventDefault();
        $("#add").hide();
        $("#popup_add").show();
    });
    $("#quit").click(function (e) { 
        e.preventDefault();
        $("#popup_add").hide();
        $("#add").show();
    });

    $("#add_form").on("submit" , function(e){
        e.preventDefault();

        let Nombre = $("#nombre").val();
        let Cantidad = $("#cantidad").val();
        let  Precio= $("#precio").val();
        let Imagen = $("#imagen").val();
        let Detalles = $("#txt").val();


        $.ajax({
            type:"post",
            url:"add_productos.php",
            data:{
                nombre:Nombre ,
                cantidad:Cantidad,
                precio:Precio,
                imagen:Imagen, 
                detalles:Detalles
            },
            success:function(response){
                console.log(response)
                  mostrarproductos()
                
            },
        })
    })

    function mostrarproductos(){
       
        $.ajax({
        type: "get",
        url: "mostrar.php",
        success: function (response) {
            $("#tablaprodductos").html(response)
        }

    });

    }
    

    mostrarproductos()

    $("#tablaprodductos").on("click",".Eliminar",function(){
        
        let id = $(this).data("id")
        eliminarDato(id)

    })

    function eliminarDato(pepito){
        $.ajax({
            type: "post",
            url: "eliminar.php",
            data: {
                id:pepito
            },
            success: function (response) {
                alert("Se elimino " + response)
                mostrarproductos()
            }
        });
        

    }
    function actualizar(){
        
    }

});