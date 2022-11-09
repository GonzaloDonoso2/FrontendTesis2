<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
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
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <!--Este <div></div> contiene la alerta visual.-->
            <div class="alert alert-success alert-dismissible show" id="alertaVisual" role="alert">
                <p><b id="mensajeAlertaVisual">Se ha iniciado una batalla...</b></p>
            </div>
            <!--Este <div></div> contiene el tablero de juego.-->
            <div id="contenedorTablero" style="position: relative;">
                <img id="imagenTablero" src="../../Imagenes/Tablero.png">        
                <div style="left: 1094px; position:absolute; top: 1px; z-index: 0;">
                    <form class="form-floating">
                        <input class="form-control" id="campoNombreJugador" readonly style="text-align: center;" type="text">
                        <label for="campoIndicadorTurno">Turno del jugador</label>
                    </form>
                </div>
                <div style="left: 1094px; position: absolute; top: 60px; z-index: 0;">
                    <form class="form-floating">
                        <input class="form-control" id="campoNumeroTurno" readonly style="text-align: center;" type="text">
                        <label for="campoIndicadorTurno">Turno Número:</label>
                    </form>
                </div>
                <div style="left: 30px; position: absolute; top: 1px; z-index: 0;">
                    <form class="form-floating">
                        <input class="form-control" id="campoNombrePersonaje" readonly style="text-align: center;" type="text">
                        <label for="campoIndicadorTurno">Turno del personaje:</label>
                    </form>
                </div>
                <img id="retratoPersonaje" src="" style="border-style: solid; border-radius: 5px; border-width: 1px; height: 105px; left: 94px; position: absolute; top: 60px; width: 78px; z-index: 0;">     
                <div style="left: 30px; position: absolute; top: 166px; z-index: 0;">
                    <form class="form-floating">
                        <button
                            class="btn btn-outline-danger"
                            disabled
                            id="botonAtacar"
                            onclick="crearCuadradosAtaque()"
                            title="Atacar"
                            type="button">
                            <i class="fa-solid fa-hand-fist"></i></button>
                        <button
                            class="btn btn-outline-success"
                            disabled
                            id="botonHabilidad"
                            title="Usar Habilidad"
                            type="button">
                            <i class="fa-solid fa-hand"></i></button>
                        <button
                            class="btn btn-outline-primary"
                            disabled
                            id="botonMoverse"
                            onclick="crearCuadradosMovimiento()"
                            title="Moverse" 
                            type="button">
                            <i class="fa-solid fa-arrows-up-down-left-right"></i></button>
                        <button 
                            class="btn btn-outline-warning"
                            disabled
                            id="botonTerminarTurno"
                            onclick="terminarTurno()"
                            title="Terminar Turno"
                            type="button">
                            <i class="fa-solid fa-x"></i></button>
                        <button 
                            class="btn btn-outline-dark"
                            disabled
                            id="botonRendirse" 
                            onclick="perderBatalla()"
                            title="Rendirse" 
                            type="button">
                            <i class="fa-solid fa-flag"></i></button>
                    </form>
                </div>                        
            </div>
            <!--Este <div></div> el panel con el mensaje de carga para el jugador.-->
            <div class="modal fade" id="panelMensajeCarga" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #fff3cd; color: #664d03; justify-content: center;">
                            <h5 class="modal-title"><b>Preparando la batalla</b> <i class="bi bi-shield-exclamation"></i></h5>                   
                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border text-warning" style="width: 6rem; height: 6rem;" role="status">
                                    <span class="sr-only">Preparando la batalla...</span>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>           
            <!--Este <div></div> el panel con mensajes para el jugador.-->
            <div class="modal fade" id="panelMensajesMovimiento" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #fff3cd; color: #664d03; justify-content: center;">
                            <h class="modal-title"><b>Confirmar Posición</b> <i class="bi bi-shield-exclamation"></i></h5>
                        </div>
                        <div class="modal-body">
                            <h6 style="text-align: center;">¿Está seguro de que quiere que su personaje se mueva a esta posición en el tablero?</h6>
                        </div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-success" data-bs-dismiss="modal" id="botonConfirmarPosicion" onclick="registrarMovimiento()" title="Confirmar la selección de esta posición" type="button"><b>Confirmar</b> <i class="fa-solid fa-arrows-to-circle"></i></button>
                            <button class="btn btn-danger" data-bs-dismiss="modal" id="botonCancelarConfirmarPosicion" onclick="cancelarMovimiento()" title="Cancelar confirmar la selección de esta posición" type="button"><b>Cancelar</b> <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Este <div></div> el panel con la animación de ataque .-->
            <div class="modal fade" id="panelAnimacionAtaque" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #f8d7da; color: #842029; justify-content: center;">
                            <h5><b>Animación de Ataque</b></h5>
                        </div>
                        <div class="modal-footer" style="justify-content: center;">
                            <img height="116px" id="animacionAtaque" src="../../Imagenes/Ataques/1.png" width="200px">
                        </div>
                    </div>
                </div>
            </div>
            <!--Este <div></div> el panel con mensajes del resultado de la batalla (VICTORIA) para el jugador.-->
            <div class="modal fade" id="panelMensajesVictoria" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #d1e7dd; color: #0f5132; justify-content: center;">
                            <h5><b>VICTORIA</b></h5>
                        </div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-success" data-bs-dismiss="modal" onclick="irPagina('Principal')" title="Ir a la página principal." type="button">Ir a la página principal <i class="fa-solid fa-arrow-turn-down-left"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Este <div></div> el panel con mensajes del resultado de la batalla (DERROTA) para el jugador.-->
            <div class="modal fade" id="panelMensajesDerrota" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: #f8d7da; color: #842029; justify-content: center;">
                            <h5><b>DERROTA</b></h5>
                        </div>
                        <div class="modal-footer" style="justify-content: center;">
                            <button class="btn btn-danger" data-bs-dismiss="modal" onclick="irPagina('Principal')" title="Ir a la página principal." type="button">Ir a la página principal <i class="fa-solid fa-arrow-turn-down-left"></i></button>
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