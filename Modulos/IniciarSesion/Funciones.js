function iniciarSesion() {

    let correoElectronico = $("#correoElectronico").val();
    let contrasena = $("#contrasena").val();
    let mensaje = "Primero ingrese su correo electrónico y contraseña.";

    if (correoElectronico === "" | contrasena === "") {
        
        $("#alertaVisual").addClass("alert-warning").removeClass("alert-danger").removeClass("alert-success");
        $("#alertaVisual").addClass("show").removeClass("fade");
        mensaje = "Primero ingrese su correo electrónico y contraseña.";
        $("#mensajeAlertaVisual").text(mensaje);
        $("#correoElectronico").focus();
        $("#correoElectronico").val("");
        $("#contrasenaUsuario").val("");

    } else {
        
        let inicioSesion = {
            "correoElectronico": correoElectronico,
            "contrasena": contrasena
        }; 
        
        let backendURL = sessionStorage.getItem("backendURL");         
        let url = backendURL + "/" + "index.php/usuarios?inicioSesion=" + JSON.stringify(inicioSesion); 

        $.ajax({   
                      
            url: url,
            method: "GET",
            success: function (provisoriaRespuesta) {
                
                if (provisoriaRespuesta === "Este usuario no está registrado.") {
                    
                    $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");                    
                    $("#alertaVisual").addClass("show").removeClass("fade");
                    $("#mensajeAlertaVisual").text("Su correo electrónico o contraseña no están registrados.");
                    $("#correoElectronicoUsuario").focus();
                    $("#correoElectronicoUsuario").val("");
                    $("#contrasenaUsuario").val("");

                } else {
                    
                    $("#panelMensajeCarga").modal("show");                    
                    let respuesta = JSON.parse(provisoriaRespuesta);
                    sessionStorage.setItem("idUsuario", respuesta[0].id);
                    sessionStorage.setItem("nombreUsuario", respuesta[0].nombre);
                    let frontendURL = sessionStorage.getItem("frontendURL");                   
                    
                    setTimeout(function () {

                        $("#panelMensajeCarga").modal("hide");
                        location.href = frontendURL + "/" + "Modulos/Principal/Pagina.php";     

                    }, 2000);                               
                }
            }
        });
    }
}


