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
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color:#6B6B6B;">
            <!--Este <div></div> contiene el menú de opciones.-->         
            <div class="container-fluid">
                <img height="50px" src="Imagenes/LogotipoEmpresa.png" width="50px">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page">Perro Negro sitio web</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn nav-link active" aria-current="page" onclick="irPagina('IniciarSesion')">Iniciar Sesión</a>
                        </li> 
                        <li class="nav-item">
                            <a class="btn nav-link" aria-current="page" onclick="irPagina('RegistrarUsuarios')">Registrarse</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <!--Este <div></div> contiene la imagen de portada y descripción del sitio web.--> 
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="Imagenes/Portada.png" style="border-style: solid; border-radius: 5px; border-width: 1px; height: 260px; margin-top: 5%; width: 488px;">     
                    </div>
                    <div class="col">
                        <img height="100px" style="margin-left: 25%; margin-top: 5%;" src="Imagenes/LogotipoJuego.png" width="200px">                        
                        <ul>
                            <li>Juega ahora Eternal Beta y únete a una comunidad de más 100.000 jugadores en todo Chile.</li>
                            <li>Puedes donar en Patreon para que nuestro juego Eternal Beta siga creciendo.</li>
                            <li>Puedes contactar con nosotros para publicitar tu producto en nuestro sitio web y  darlo a conocer a más de 100.000 personas en todo Chile.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        <!--Estos <script></script> contienen las CDN de jQuery y Bootstrap que dan funcionalidades a la página web.-->
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        <script src="Funciones/FuncionesIndex.js"></script>
        <script src="Funciones/FuncionesComunes.js"></script>
    </body>
</html>