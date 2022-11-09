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
                            <a class="btn nav-link active" aria-current="page" onclick="irPagina('DesafiarUsuarios')">Desafiar a un Jugador</a>
                        </li> 
                        <li class="nav-item">
                            <a class="btn nav-link" aria-current="page" onclick="irPagina('PerfilUsuario')">Mi Perfil de Usuario</a>
                        </li>
                    </ul>
                </div>
                <a class="btn nav-link" aria-current="page" onclick="terminarSesion()" style="color: #842029;"><b>Terminar Sesión</b></a>
            </div>
        </nav>
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-success alert-dismissible show" id="alertaVisual" role="alert">
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
            <!--Este <div></div> contiene los resultados de las batallas del usuario y la tabla con sus personajes.-->
            <div class="container form-control">
                <div class="row">
                    <div class="col">
                        <ul>
                            <li><span><i class="fa-solid fa-user"></i><b id="nombreUsuario"></b></span></li>
                            <li><span><i class="fa-solid fa-trophy"></i><b id="victoriasUsuario"></b></span></li>
                            <li><span><i class="fa-solid fa-skull"></i><b id="derrotasUsuario"></b></span></li>
                        </ul>                                          
                    </div>                    
                </div>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-outline-success" id="botonRegistrar" onclick="irPagina('RegistrarPersonajes')" style="margin-bottom: 5%; margin-left: 80%;" type="button" title="Crear Personaje"><b>Crear Personaje </b><i class="fa-solid fa-plus"></i><i class="fa-solid fa-user"></i></button>
                        <div class="form-control" style="height: 300px; overflow-y: scroll; width: 100%;">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Retrato</th>
                                        <th>Categoría</th>
                                        <th>Nombre</th>
                                        <th>Acciones</th>
                                    </tr> 
                                </thead>  
                                <tbody id="tablaPersonajes"></tbody>  
                            </table>
                        </div>
                    </div>
                </div>                
            </div>               
            <!--Este <div></div> el panel con mensajes de desafío para el usuario.-->
            <div class="modal fade" id="panelMensajeDesafios" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #fff3cd; color: #664d03; justify-content: center;">
                            <h5><b>Has recibido un desafío</b> <i class="bi bi-shield-exclamation"></i></h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <h6 id="fechaDesafio" style="text-align: center;"></h6>
                                    <h6 id="mensajeDesafio" style="text-align: center;"></h6>
                                </div> 
                                <div class="col" style="background-color: #fff3cd; color: #664d03;">
                                    <h1 id="mensajeCuentaRegresiva" style="font-size: 80px; text-align: center;"><i class="bi bi-exclamation-triangle"></i></h1>
                                </div>
                            </div>                            
                        </div>
                        <div class="modal-footer" id="contenedorBotonesOpcionColor" style="justify-content: center;"></div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-success" data-bs-dismiss="modal" id="botonAceptarDesafio" disabled onclick="aceptarDesafio()" title="¿Acepta este desafío?" type="button">Aceptar <i class="bi bi-shield-check"></i></button>
                            <button class="btn btn-danger" data-bs-dismiss="modal" id="botonRechazarDesafio" onclick="rechazarDesafio()" title="¿Rechaza este desafío?" type="button">Rechazar <i class="bi bi-shield-x"></i></button>
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