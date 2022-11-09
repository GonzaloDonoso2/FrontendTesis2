<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Perro Negro sitio web</title>
        <!--Estos <links> contienen la CDN de Bootstrap que dan estilo e iconos a la página web.-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <!--Este <script></script> contienen la CDN de Font Awesome que dan iconos a la página web.-->
        <script src="https://kit.fontawesome.com/06c09b3cfb.js" crossorigin="anonymous"></script>
    </head>
    <body>        
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#6B6B6B;">
            <!--Este <div></div> contiene el menú de opciones.-->         
            <div class="container-fluid">
                <img height="50px" src="../../Imagenes/LogotipoEmpresa.png" width="50px">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page">Perro Negro sitio web</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn nav-link active" aria-current="page" onclick="irPaginaInicio()">Volver Página Inicio</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-warning alert-dismissible fade" id="alertaVisual" role="alert">
                <p><b id="mensajeAlertaVisual"></b></p>
                <button aria-label="Close" class="btn-close" id="botonOcultarAlertaVisual" onclick="ocultarAlertaVisual()" type="button"></button>                
            </div>
            <!--Este <div></div> contiene el panel con el mensaje de carga para el jugador.-->
            <div class="modal fade" id="panelMensajeCarga" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #fff3cd; color: #664d03; justify-content: center;">
                            <h5 class="modal-title"><b>Espere por favor...</b> <i class="bi bi-shield-exclamation"></i></h5>                   
                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border text-warning" style="width: 6rem; height: 6rem;" role="status">
                                    <span class="sr-only">Espere por favor...</span>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <!--Este <div></div> contiene la imagen de portada y el formulario para iniciar sesión.-->
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="../../Imagenes/Portada.png" style="border-style: solid; border-radius: 5px; border-width: 1px; height: 260px; margin-top: 5%; width: 488px;">     
                    </div>
                    <div class="col">
                        <div class="form-control" style="margin-top: 5%;">
                            <p><b>Correo Electrónico</b></p>
                            <input class="form-control" id="correoElectronico" placeholder="Correo Electrónico" type="text">
                            <p><b>Contraseña</b></p>
                            <input class="form-control" id="contrasena" placeholder="Contraseña" type="password">
                            <br>
                            <button class="btn btn-outline-success form-control" id="botonIniciarSesion" onclick="iniciarSesion()" type="button"><b>Iniciar Sesión</b> <i class="fa-solid fa-unlock-keyhole"></i></button>
                        </div>                        
                    </div>
                </div>                
            </div>
        </main>
        <!--Estos <script></script> contienen las CDN de jQuery y Bootstrap que dan funcionalidades a la página web.-->
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> 
        <script src="Funciones.js"></script>
        <script src="../../Funciones/FuncionesComunes.js"></script>
    </body>
</html>