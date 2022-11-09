function ocultarAlertaVisual() {

    $("#alertaVisual").addClass("fade").removeClass("show");
}

function irPaginaInicio() {

    let frontendURL = sessionStorage.getItem("frontendURL");
    location.href = frontendURL + "/" + "index.php";
}

function irPagina(modulo) {

    let frontendURL = sessionStorage.getItem("frontendURL");
    location.href = frontendURL + "/" + "Modulos/" + modulo + "/Pagina.php";
}

function terminarSesion() {
    
    $("#panelMensajeCarga").modal("show");
    sessionStorage.removeItem("idUsuario");
    sessionStorage.removeItem("nombreUsuario");
    let frontendURL = sessionStorage.getItem("frontendURL");
    
    setTimeout(function () {

        $("#panelMensajeCarga").modal("hide");
        location.href = frontendURL + "/" + "index.php";

    }, 2000);  
}


