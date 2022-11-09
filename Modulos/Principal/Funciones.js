$(document).ready(function () {
    
    validarInicioSesion();
});

function validarInicioSesion() {
    
    $("#panelMensajeCarga").modal("show");
    
    if (sessionStorage.getItem("idUsuario") === null) {        
        
        let frontendURL = sessionStorage.getItem("frontendURL");
        location.href = frontendURL + "/" + "Modulos/IniciarSesion/Pagina.php";

    } else {
        
        mostrarSaludoInicial();
        obtenerResultadosBatallas();
        obtenerPersonajes();
        buscarDesafios();
    }   
}

function mostrarSaludoInicial() {
    
    let mensaje = "Bienvenido " + sessionStorage.getItem("nombreUsuario");
    $("#contenedorAlertaVisual").addClass("alert-success").removeClass("alert-danger").removeClass("alert-warning");
    $("#contenedorAlertaVisual").addClass("show").removeClass("fade");
    $("#mensajeAlertaVisual").text(mensaje);
    $("#nombreUsuario").text(" " + sessionStorage.getItem("nombreUsuario"));
}

function obtenerResultadosBatallas() {

    let resultadosBatallas = {

        "idUsuario": sessionStorage.getItem("idUsuario")
    };
    
    let backendURL = sessionStorage.getItem("backendURL");    
    let url = backendURL + "/" + "index.php/batallas?resultadosBatallas=" + JSON.stringify(resultadosBatallas);
    
    $.ajax({
        url: url,
        method: "GET",
        success: function (provisoriaRespuesta) {
            
            let respuesta = JSON.parse(provisoriaRespuesta);
            let victorias = 0;
            let derrotas = 0;
            
            for (let i = 0; i < respuesta.length; i++) {
                
                if (respuesta[i].resultadoBatalla === "VICTORIA") {
                    
                    victorias++;                    
                    
                } else if (respuesta[i].resultadoBatalla === "DERROTA") {
                    
                    derrotas++;                    
                }                
            }
            
            $("#victoriasUsuario").text(" " + victorias);
            $("#derrotasUsuario").text(" " + derrotas);
        }
    });
}

function obtenerPersonajes() {

    let obtenerPersonajes = {
        
        "idUsuario": sessionStorage.getItem("idUsuario")
    };
    
    let backendURL = sessionStorage.getItem("backendURL"); 
    let url = backendURL + "/" + "index.php/personajes?obtenerPersonajes=" + JSON.stringify(obtenerPersonajes);    

    $.ajax({
        url: url,
        method: "GET",
        success: function (provisoriaRespuesta) {
            
            let respuesta = JSON.parse(provisoriaRespuesta);
            let plantilla; 

            for (let i = 0; i < respuesta.length; i++) {

                let aleatorioColor = Math.ceil(Math.random() * 6);
                let color;

                if (aleatorioColor === 1) {

                    color = "Amarillo";

                } else if (aleatorioColor === 2) {

                    color = "Azul";

                } else if (aleatorioColor === 3) {

                    color = "Morado";

                } else if (aleatorioColor === 4) {

                    color = "Naranjo";
                    
                } else if (aleatorioColor === 5) {

                    color = "Rojo";
                    
                }else if (aleatorioColor === 6) {

                    color = "Verde";
                }
            
                plantilla += `<tr><td><img src="../../Imagenes/Personajes/Retratos/${respuesta[i].categoria}/${color}.png"></td>`;
                plantilla += `<td>${respuesta[i].categoria}</td>`;
                plantilla += `<td>${respuesta[i].nombrePersonaje}</td>`;           
                plantilla += `<td><div class="btn-group">`;
                plantilla += `<button class="btn btn-outline-danger" title="Borrar Personaje" type="button"><i class="bi bi-trash"></i></button>`;
                plantilla += `<button class="btn btn-outline-primary" title="Corregir Personaje" type="button"><i class="bi bi-pencil"></i></button>`;
                plantilla += `</div><td></tr>`;
            }
            
            $("#tablaPersonajes").html(plantilla);
            $("#panelMensajeCarga").modal("hide");  
        }
    });
}

function seleccionarColor(color) {
    
    sessionStorage.setItem("colorUsuario2", color);
    $("#botonAceptarDesafio").removeAttr("disabled");
}

function aceptarDesafio() {

    let desafioAceptado = {

        "idDesafio": sessionStorage.getItem("idDesafio"),
        "colorUsuario": sessionStorage.getItem("colorUsuario2")
    };

    let backendURL = sessionStorage.getItem("backendURL");
    let url = backendURL + "/" + "index.php/desafios?desafioAceptado=" + JSON.stringify(desafioAceptado);

    $.ajax({
        url: url,
        method: "PUT",
        success: function (respuesta) {

            if (respuesta !== "Desafío aceptado.") {
                
                $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text("Ha ocurrido un error al intentar registrar que sea aceptado el desafío en la base de datos.");
            }
        }
    });
}

function rechazarDesafio() {

    let desafioRechazado = {

        "idDesafio": sessionStorage.getItem("idDesafio")
    };
    
    let backend = sessionStorage.getItem("backendURL");    
    let url = backend + "/" + "index.php/desafios?desafioRechazado=" + JSON.stringify(desafioRechazado);

    $.ajax({
        url: url,
        method: "PUT",
        success: function (respuesta) {

            if (respuesta !== "Desafío rechazado.") {
                
                $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text("Ha ocurrido un error al intentar registrar que sea rechazado el desafío en la base de datos.");                
            }
        }
    });    
}

function buscarDesafios() {

    function buscar() { 
        
        let usuario = {

            "idUsuario": sessionStorage.getItem("idUsuario")
        };

        let backendURL = sessionStorage.getItem("backendURL");
        let url = backendURL + "/" + "index.php/desafios?usuario=" + JSON.stringify(usuario);

        $.ajax({
            url: url,
            method: "GET",
            success: function (provisoriaRespuestaExterior) {

                if (provisoriaRespuestaExterior !== "Sin desafios vigentes.") {

                    clearInterval(idEjecutorFuncionExterna);
                    let respuestaExterior = JSON.parse(provisoriaRespuestaExterior);
                    sessionStorage.setItem("idDesafio", respuestaExterior[0].idDesafio);
                    sessionStorage.setItem("colorUsuario1", respuestaExterior[0].colorUsuario1);
                    $("#fechaDesafio").text(respuestaExterior[0].fecha);
                    $("#mensajeDesafio").text("Fue desafiado por el usuario " + respuestaExterior[0].nombreUsuario1 + " a una batalla.");
                    let botonAmarillo = "";
                    let botonAzul = "";
                    let botonMorado = "";
                    let botonNaranjo = "";
                    let botonRojo = "";
                    let botonVerde = "";
                    let plantilla;

                    if (respuestaExterior[0].colorUsuario1 !== "Amarillo") {

                        botonAmarillo = `<button class="btn" id="botonAmarillo" onclick="seleccionarColor('Amarillo')" style="background-color: #E5E5E5;" title="Amarillo" type="button"><img height="50px" src="../../Imagenes/Escudos/Amarillo.png" width="50px"></button>`;
                    }
                    if (respuestaExterior[0].colorUsuario1 !== "Azul") {

                        botonAzul = `<button class="btn" id="botonAzul" onclick="seleccionarColor('Azul')" style="background-color: #E5E5E5;" title="Azul" type="button"><img height="50px" src="../../Imagenes/Escudos/Azul.png" width="50px"></button>`;
                    }
                    if (respuestaExterior[0].colorUsuario1 !== "Morado") {

                        botonMorado = `<button class="btn" id="botonMorado" onclick="seleccionarColor('Morado')" style="background-color: #E5E5E5;" title="Morado" type="button"><img height="50px" src="../../Imagenes/Escudos/Morado.png" width="50px"></button>`;
                    }
                    if (respuestaExterior[0].colorUsuario1 !== "Naranjo") {

                        botonNaranjo = `<button class="btn" id="botonNaranjo" onclick="seleccionarColor('Naranjo')" style="background-color: #E5E5E5;" title="Naranjo" type="button"><img height="50px" src="../../Imagenes/Escudos/Naranjo.png" width="50px"></button>`;
                    }
                    if (respuestaExterior[0].colorUsuario1 !== "Rojo") {

                        botonRojo = `<button class="btn" id="botonRojo" onclick="seleccionarColor('Rojo')" style="background-color: #E5E5E5;" title="Rojo" type="button"><img height="50px" src="../../Imagenes/Escudos/Rojo.png" width="50px"></button>`;
                    }
                    if (respuestaExterior[0].colorUsuario1 !== "Verde") {

                        botonVerde = `<button class="btn" id="botonVerde" onclick="seleccionarColor('Verde')" style="background-color: #E5E5E5;" title="Verde" type="button"><img height="50px" src="../../Imagenes/Escudos/Verde.png" width="50px"></button>`;
                    }

                    plantilla = botonAmarillo + botonAzul + botonMorado + botonNaranjo + botonRojo + botonVerde;
                    $("#contenedorBotonesOpcionColor").html(plantilla);
                    $("#panelMensajeDesafios").modal("show");
                    let segundosRestantes = 19;

                    function cuentaRegresiva() {

                        segundosRestantes--;

                        if (segundosRestantes >= 0) {
                            
                            $("#mensajeCuentaRegresiva").text(segundosRestantes);

                            let idDesafio = {

                                "id": sessionStorage.getItem("idDesafio")
                            };

                            url = backendURL + "/" + "index.php/desafios?idDesafio=" + JSON.stringify(idDesafio);

                            $.ajax({
                                url: url,
                                method: "GET",
                                success: function (provisoriaRespuestaInterior) {

                                    if (provisoriaRespuestaInterior !== "Sin Respuesta.") {
                                        
                                        clearInterval(idEjecutorFuncionInterna);
                                        let respuestaInterior = JSON.parse(provisoriaRespuestaInterior);
                                        
                                        if (respuestaInterior[0].estadoDesafio === "ACEPTADO") {
                                            
                                            $("#panelMensajeDesafios").modal("hide");
                                            $("#panelMensajeCarga").modal("show");                                            
                                            let frontendURL = sessionStorage.getItem("frontendURL");
                                            location.href = frontendURL + "/" + "Modulos/Batallas/Pagina.php";

                                        } else if (respuestaInterior[0].estadoDesafio === "RECHAZADO") {                                            

                                            $("#panelMensajeDesafios").modal("hide");
                                            sessionStorage.setItem("idDesafio", null);
                                            sessionStorage.setItem("colorUsuario1", null);
                                            sessionStorage.setItem("colorUsuario2", null);
                                            buscarDesafios();
                                        }
                                    }
                                }
                            });

                        } else {

                            clearInterval(idEjecutorFuncionInterna);
                            rechazarDesafio();
                            $("#panelMensajeDesafios").modal("hide");
                            sessionStorage.setItem("idDesafio", null);
                            sessionStorage.setItem("colorUsuario1", null);
                            sessionStorage.setItem("colorUsuario2", null);
                            buscarDesafios();
                        }
                    }

                    idEjecutorFuncionInterna = setInterval(cuentaRegresiva, 1000);
                }
            }
        });
    }

    idEjecutorFuncionExterna = setInterval(buscar, 3000);
}



