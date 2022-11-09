$(document).ready(function () {

    validarInicioSesion();
});

function validarInicioSesion() {
    
    $("#panelMensajeCarga").modal("show");

    if (sessionStorage.getItem("nombreUsuario") === null) {
        
        let frontendUrl = sessionStorage.getItem("fURL");
        location.href = frontendUrl + "/" + "Modulos/ModuloInicioSesion/Pagina.php";

    } else {
        
        crearPosiciones();        
        iniciarBatalla();
    }
}

function iniciarBatalla() {  

    let desafio = {

        "id": sessionStorage.getItem("idDesafio"),
    };
    let backendUrl = sessionStorage.getItem("backendURL");    
    let url = backendUrl + "/" + "index.php/batallas?desafio=" + JSON.stringify(desafio);

    $.ajax({
        url: url,
        method: "GET",
        success: function (provisoriaRespuesta) {

            let provisoriaRespuestaBatalla = JSON.parse(provisoriaRespuesta);
            sessionStorage.setItem("idBatalla", provisoriaRespuestaBatalla[0].idBatalla);
            sessionStorage.setItem("idUsuario1", provisoriaRespuestaBatalla[1].usuario1.idUsuario1);
            sessionStorage.setItem("nombreUsuario1", provisoriaRespuestaBatalla[1].usuario1.nombreUsuario1);
            sessionStorage.setItem("colorUsuario1", provisoriaRespuestaBatalla[1].usuario1.colorUsuario1);
            sessionStorage.setItem("idUsuario2", provisoriaRespuestaBatalla[2].usuario2.idUsuario2);
            sessionStorage.setItem("nombreUsuario2", provisoriaRespuestaBatalla[2].usuario2.nombreUsuario2);
            sessionStorage.setItem("colorUsuario2", provisoriaRespuestaBatalla[2].usuario2.colorUsuario2);
            sessionStorage.setItem("accionRealizada", "ACCION NO REALIZADA");
            sessionStorage.setItem("ataqueRealizado", "ATAQUE NO REALIZADO");
            sessionStorage.setItem("movimientoRealizado", "MOVIMIENTO NO REALIZADO");
            sessionStorage.setItem("botonAtaquePresionado", "BOTON NO PRESIONADO");
            sessionStorage.setItem("botonMovimientoPresionado", "BOTON NO PRESIONADO");    
            let personaje1 = provisoriaRespuestaBatalla[3].personajesUsuario1;            
            let personaje2 = provisoriaRespuestaBatalla[4].personajesUsuario1;
            let personaje3 = provisoriaRespuestaBatalla[5].personajesUsuario1;
            let personaje4 = provisoriaRespuestaBatalla[6].personajesUsuario1;
            let personaje5 = provisoriaRespuestaBatalla[7].personajesUsuario2;            
            let personaje6 = provisoriaRespuestaBatalla[8].personajesUsuario2;
            let personaje7 = provisoriaRespuestaBatalla[9].personajesUsuario2;
            let personaje8 = provisoriaRespuestaBatalla[10].personajesUsuario2;
            let orientacion1 = "Derecha";
            let orientacion2 = "Izquierda";
            //let orientacion2 = "Arriba";
            let posicion1 = "5F";
            let posicion2 = "7F";
            let posicion3 = "6H";
            let posicion4 = "8H";
            let posicion5 = "5K";
            let posicion6 = "7K";    
            let posicion7 = "6M";
            let posicion8 = "8M"; 
            //let posicion5 = "13M";
            //let posicion6 = "15M";    
            //let posicion7 = "14O";
            //let posicion8 = "16O"; 
            crearPersonajes(sessionStorage.getItem("idUsuario1"), personaje1.idPersonaje, personaje1.nombrePersonaje, personaje1.categoria, sessionStorage.getItem("colorUsuario1"), personaje1.alcanceArma, personaje1.ataqueArma, personaje1.danoArma, personaje1.defensaArma, personaje1.defensaArmadura, personaje1.evasion, personaje1.iniciativa, personaje1.movimiento, personaje1.punteriaArma, personaje1.resistenciaArma, personaje1.resistenciaArmadura, personaje1.salud, personaje1.tipoDano, orientacion1, posicion1);
            crearPersonajes(sessionStorage.getItem("idUsuario1"), personaje2.idPersonaje, personaje2.nombrePersonaje, personaje2.categoria, sessionStorage.getItem("colorUsuario1"), personaje2.alcanceArma, personaje2.ataqueArma, personaje2.danoArma, personaje2.defensaArma, personaje2.defensaArmadura, personaje2.evasion, personaje2.iniciativa, personaje2.movimiento, personaje2.punteriaArma, personaje2.resistenciaArma, personaje2.resistenciaArmadura, personaje2.salud, personaje2.tipoDano, orientacion1, posicion2);
            crearPersonajes(sessionStorage.getItem("idUsuario1"), personaje3.idPersonaje, personaje3.nombrePersonaje, personaje3.categoria, sessionStorage.getItem("colorUsuario1"), personaje3.alcanceArma, personaje3.ataqueArma, personaje3.danoArma, personaje3.defensaArma, personaje3.defensaArmadura, personaje3.evasion, personaje3.iniciativa, personaje3.movimiento, personaje3.punteriaArma, personaje3.resistenciaArma, personaje3.resistenciaArmadura, personaje3.salud, personaje3.tipoDano, orientacion1, posicion3);
            crearPersonajes(sessionStorage.getItem("idUsuario1"), personaje4.idPersonaje, personaje4.nombrePersonaje, personaje4.categoria, sessionStorage.getItem("colorUsuario1"), personaje4.alcanceArma, personaje4.ataqueArma, personaje4.danoArma, personaje4.defensaArma, personaje4.defensaArmadura, personaje4.evasion, personaje4.iniciativa, personaje4.movimiento, personaje4.punteriaArma, personaje4.resistenciaArma, personaje4.resistenciaArmadura, personaje4.salud, personaje4.tipoDano, orientacion1, posicion4);
            crearPersonajes(sessionStorage.getItem("idUsuario2"), personaje5.idPersonaje, personaje5.nombrePersonaje, personaje5.categoria, sessionStorage.getItem("colorUsuario2"), personaje5.alcanceArma, personaje5.ataqueArma, personaje5.danoArma, personaje5.defensaArma, personaje5.defensaArmadura, personaje5.evasion, personaje5.iniciativa, personaje5.movimiento, personaje5.punteriaArma, personaje5.resistenciaArma, personaje5.resistenciaArmadura, personaje5.salud, personaje5.tipoDano, orientacion2, posicion5);
            crearPersonajes(sessionStorage.getItem("idUsuario2"), personaje6.idPersonaje, personaje6.nombrePersonaje, personaje6.categoria, sessionStorage.getItem("colorUsuario2"), personaje6.alcanceArma, personaje6.ataqueArma, personaje6.danoArma, personaje6.defensaArma, personaje6.defensaArmadura, personaje6.evasion, personaje6.iniciativa, personaje6.movimiento, personaje6.punteriaArma, personaje6.resistenciaArma, personaje6.resistenciaArmadura, personaje6.salud, personaje6.tipoDano, orientacion2, posicion6);
            crearPersonajes(sessionStorage.getItem("idUsuario2"), personaje7.idPersonaje, personaje7.nombrePersonaje, personaje7.categoria, sessionStorage.getItem("colorUsuario2"), personaje7.alcanceArma, personaje7.ataqueArma, personaje7.danoArma, personaje7.defensaArma, personaje7.defensaArmadura, personaje7.evasion, personaje7.iniciativa, personaje7.movimiento, personaje7.punteriaArma, personaje7.resistenciaArma, personaje7.resistenciaArmadura, personaje7.salud, personaje7.tipoDano, orientacion2, posicion7);
            crearPersonajes(sessionStorage.getItem("idUsuario2"), personaje8.idPersonaje, personaje8.nombrePersonaje, personaje8.categoria, sessionStorage.getItem("colorUsuario2"), personaje8.alcanceArma, personaje8.ataqueArma, personaje8.danoArma, personaje8.defensaArma, personaje8.defensaArmadura, personaje8.evasion, personaje8.iniciativa, personaje8.movimiento, personaje8.punteriaArma, personaje8.resistenciaArma, personaje8.resistenciaArmadura, personaje8.salud, personaje8.tipoDano, orientacion2, posicion8);                   
            buscarTurno();
        }
    });
}

var listaPosiciones = [];

function crearPosiciones() {

    let columna = 0;
    let letraColumna;
    let fila = 0;    
    let aumentoCoordenadasX = 0;
    let aumentoCoordenadasY = 0;
    let disminucionCoordenadasX = 0;
    let segundoAumentoCoordenadasY = 0;

    for (let i = 1; i < 401; i++) {

        columna++;        
        aumentoCoordenadasX = (aumentoCoordenadasX + 32);
        aumentoCoordenadasY = (aumentoCoordenadasY + 16);

        if (columna > 20) {

            columna = 1;            
            disminucionCoordenadasX = (disminucionCoordenadasX + 32);
            segundoAumentoCoordenadasY = (segundoAumentoCoordenadasY + 16);
            aumentoCoordenadasX = (32 - disminucionCoordenadasX);
            aumentoCoordenadasY = (16 + segundoAumentoCoordenadasY);
        }
        
        if (columna === 1) {

            letraColumna = "A";

        } else if (columna === 2) {

            letraColumna = "B";

        } else if (columna === 3) {

            letraColumna = "C";

        } else if (columna === 4) {

            letraColumna = "D";

        } else if (columna === 5) {

            letraColumna = "E";

        } else if (columna === 6) {

            letraColumna = "F";

        } else if (columna === 7) {

            letraColumna = "G";

        } else if (columna === 8) {

            letraColumna = "H";

        } else if (columna === 9) {

            letraColumna = "I";

        } else if (columna === 10) {

            letraColumna = "J";

        } else if (columna === 11) {

            letraColumna = "K";

        } else if (columna === 12) {

            letraColumna = "L";

        } else if (columna === 13) {

            letraColumna = "M";

        } else if (columna === 14) {

            letraColumna = "N";

        } else if (columna === 15) {

            letraColumna = "O";

        } else if (columna === 16) {

            letraColumna = "P";

        } else if (columna === 17) {

            letraColumna = "Q";

        } else if (columna === 18) {

            letraColumna = "R";

        } else if (columna === 19) {

            letraColumna = "S";

        } else if (columna === 20) {

            letraColumna = "T";
        }

        let x = (i / 20);

        if (fila < x) {

            fila++;
        }

        let nombre = (fila + letraColumna);
        
        let posicion = {
            
            "nombre": nombre,
            "columna": columna,
            "fila": fila,
            "coordenadaX1": (640 + aumentoCoordenadasX),
            "coordenadaX2": (647 + aumentoCoordenadasX),
            "coordenadaX3": (632 + aumentoCoordenadasX),
            "coordenadaX4": (655 + aumentoCoordenadasX),
            "coordenadaX5": (624 + aumentoCoordenadasX),
            "coordenadaX6": (663 + aumentoCoordenadasX),
            "coordenadaX7": (616 + aumentoCoordenadasX),
            "coordenadaX8": (671 + aumentoCoordenadasX),
            "coordenadaX9": (624 + aumentoCoordenadasX),
            "coordenadaX10": (663 + aumentoCoordenadasX),
            "coordenadaX11": (632 + aumentoCoordenadasX),
            "coordenadaX12": (655 + aumentoCoordenadasX),
            "coordenadaX13": (640 + aumentoCoordenadasX),
            "coordenadaX14": (647 + aumentoCoordenadasX),
            "coordenadaY1": (20 + aumentoCoordenadasY),
            "coordenadaY2": (23 + aumentoCoordenadasY),
            "coordenadaY3": (24 + aumentoCoordenadasY),
            "coordenadaY4": (27 + aumentoCoordenadasY),
            "coordenadaY5": (28 + aumentoCoordenadasY),
            "coordenadaY6": (31 + aumentoCoordenadasY),
            "coordenadaY7": (32 + aumentoCoordenadasY),
            "coordenadaY8": (35 + aumentoCoordenadasY),
            "coordenadaY9": (36 + aumentoCoordenadasY),
            "coordenadaY10": (39 + aumentoCoordenadasY),
            "coordenadaY11": (40 + aumentoCoordenadasY),
            "coordenadaY12": (43 + aumentoCoordenadasY),
            "coordenadaY13": (44 + aumentoCoordenadasY),
            "coordenadaY14": (47 + aumentoCoordenadasY),
            "disponibilidad": true,
            "estado": "SIN ESTADO"
        };
        
        this.listaPosiciones.push(posicion);
    }
}

var listaPersonajes = [];

function crearPersonajes(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {

    let idUsuario = parseInt(a);
    let id = parseInt(b);
    let nombre = c;
    let categoria = d;
    let color = e;
    let alcanceArma = parseInt(f);
    let ataqueArma = parseInt(g);
    let danoArma = parseInt(h);
    let defensaArma = parseInt(i);
    let defensaArmadura = parseInt(j);
    let evasion = parseInt(k);
    let iniciativa = parseInt(l);
    let movimiento = parseInt(m);
    let punteriaArma = parseInt(n);
    let resistenciaArma = parseInt(o);
    let resistenciaArmadura = parseInt(p);
    let salud = parseInt(q);
    let tipoDano = r
    let orientacion = s;
    let posicion = t;

    let personaje = {
        "idUsuario": idUsuario,
        "id": id,
        "nombre": nombre,
        "categoria": categoria,
        "color": color,
        "alcanceArma": alcanceArma,
        "ataqueArma": ataqueArma,
        "danoArma": danoArma,
        "defensaArma": defensaArma,
        "defensaArmadura": defensaArmadura,
        "evasion": evasion,
        "iniciativa": iniciativa,
        "movimiento": movimiento,
        "punteriaArma": punteriaArma,
        "resistenciaArma": resistenciaArma,
        "resistenciaArmadura": resistenciaArmadura,
        "salud": salud,
        "tipoDano": tipoDano,
        "orientacion": orientacion,
        "posicion": posicion,
        "coordenadaX": "",
        "coordenadaY": ""
    };

    this.listaPersonajes.push(personaje);

    if (this.listaPersonajes.length === 8) {

        let plantilla;
        let coordenadaX = 0;
        let coordenadaY = 0;

        for (let x = 0; x < this.listaPersonajes.length; x++) {

            for (let y = 0; y < this.listaPosiciones.length; y++) {

                if (this.listaPersonajes[x].posicion === this.listaPosiciones[y].nombre) {

                    coordenadaX = (this.listaPosiciones[y].coordenadaX7 + 4);
                    coordenadaY = (this.listaPosiciones[y].coordenadaY1 - 44);
                    this.listaPosiciones[y].disponibilidad = false;
                }
            }

            plantilla = `<img `;
            plantilla += `height="68px" `;
            plantilla += `id="personaje${this.listaPersonajes[x].id}" `;
            plantilla += `src="../../Imagenes/Personajes/Miniaturas/${this.listaPersonajes[x].color}/${this.listaPersonajes[x].categoria}/${this.listaPersonajes[x].orientacion}.png" `;
            plantilla += `style="left: ${coordenadaX}px; position: absolute; top: ${coordenadaY}px; z-index: 3;" `
            plantilla += `title="${this.listaPersonajes[x].nombre}" `;
            plantilla += `width="44px">`;
            $("#contenedorTablero").append(plantilla);
        }
    }
}

var listaCuadradosAtaque = [];
var listaCuadradosMovimiento = [];
var listaBotonesAtaque = [];
var listaBotonesMovimiento = [];
var listaMovimientos = [];

function cancelarAtaque() {
    
    sessionStorage.setItem("botonAtaquePresionado", "BOTON NO PRESIONADO");    
    sessionStorage.setItem("botonMovimientoPresionado", "BOTON NO PRESIONADO");    
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {
        
        let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
        document.getElementById(idImagenPersonaje).style.opacity = "1";
    }        
    
    let contenedorTablero = document.getElementById("contenedorTablero");

    for (let i = 0; i < this.listaBotonesAtaque.length; i++) {

        let idBotonAtaque = "botonAtaque" + this.listaBotonesAtaque[i].id;
        let botonAtaque = document.getElementById(idBotonAtaque);
        contenedorTablero.removeChild(botonAtaque);
    }

    for (let i = 0; i < this.listaCuadradosAtaque.length; i++) {

        let idCuadradoAtaque = "cuadradoAtaque" + this.listaCuadradosAtaque[i].id;
        let cuadradoAtaque = document.getElementById(idCuadradoAtaque);
        contenedorTablero.removeChild(cuadradoAtaque);
    }
    
    this.listaBotonesAtaque = [];
    this.listaCuadradosAtaque = [];
}

function cancelarMovimiento() {
    
    sessionStorage.setItem("botonAtaquePresionado", "BOTON NO PRESIONADO");    
    sessionStorage.setItem("botonMovimientoPresionado", "BOTON NO PRESIONADO");
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {
        
        let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
        document.getElementById(idImagenPersonaje).style.opacity = "1";
    }        
    
    let contenedorTablero = document.getElementById("contenedorTablero");

    for (let i = 0; i < this.listaBotonesMovimiento.length; i++) {

        let idBotonMovimiento = "botonMovimiento" + this.listaBotonesMovimiento[i].id;
        let botonMovimiento = document.getElementById(idBotonMovimiento);
        contenedorTablero.removeChild(botonMovimiento);
    }

    for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

        let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
        let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);
        contenedorTablero.removeChild(cuadradoMovimiento);
    }
    
    let cuadradoSeleccionado = document.getElementById("cuadradoSeleccionado");
    
    if (cuadradoSeleccionado !== null) {
        
        contenedorTablero.removeChild(cuadradoSeleccionado);            
    }  
    
    this.listaBotonesMovimiento = [];
    this.listaCuadradosMovimiento = [];
}

function crearCuadradosAtaque() {

    sessionStorage.setItem("botonAtaquePresionado", "BOTON PRESIONADO");
    document.getElementById("botonAtacar").setAttribute("disabled", true);
    cancelarMovimiento();
    let idPersonajeTurno = parseInt(sessionStorage.getItem("idPersonajeTurno"));
    let provisorioAlcanceArmaPersonaje;
    let alcanceArmaPersonaje;
    let posicionPersonaje;
    let columna;
    let fila;

    for (let i = 0; i < this.listaPersonajes.length; i++) {

        let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
        document.getElementById(idImagenPersonaje).style.opacity = "0.5";

        if (this.listaPersonajes[i].id === idPersonajeTurno) {

            provisorioAlcanceArmaPersonaje = this.listaPersonajes[i].alcanceArma;
            posicionPersonaje = this.listaPersonajes[i].posicion;
        }
    }

    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].nombre === posicionPersonaje) {

            columna = this.listaPosiciones[i].columna;
            fila = this.listaPosiciones[i].fila;
        }
    }

    alcanceArmaPersonaje = parseInt(provisorioAlcanceArmaPersonaje);
    let limiteVerticalSuperior = (fila - alcanceArmaPersonaje);
    let limiteVerticalInferior = (fila + alcanceArmaPersonaje);
    let incrementoIzquierdo = 0;
    let incrementoDerecho = 0;

    if (limiteVerticalSuperior === 0) {

        limiteVerticalSuperior = 1;
        incrementoIzquierdo = (1);
        incrementoDerecho = (1);

    } else if (limiteVerticalSuperior < 0) {

        let y = ((limiteVerticalSuperior * -1) + 1);

        limiteVerticalSuperior = 1;
        incrementoIzquierdo = (y);
        incrementoDerecho = (y);
    }

    let x;

    if (columna === 20) {

        x = 19;

    } else {

        x = 20;
    }

    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].fila >= limiteVerticalSuperior & this.listaPosiciones[i].fila <= limiteVerticalInferior) {

            if (this.listaPosiciones[i].columna >= (columna - incrementoIzquierdo) & this.listaPosiciones[i].columna <= (columna + incrementoDerecho)) {


                let cuadradoCoordenadaX = (this.listaPosiciones[i].coordenadaX7 - 8);
                let botonCoordendaX = (this.listaPosiciones[i].coordenadaX7 + 5);
                let cuadradoCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 4);
                let botonCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 5);
                let plantillaCuadrados = `<img `;
                plantillaCuadrados += `height="36px" `;
                plantillaCuadrados += `id="cuadradoAtaque${this.listaPosiciones[i].nombre}" `;
                plantillaCuadrados += `src="../../Imagenes/Cuadrados/RojoA.png" `;
                plantillaCuadrados += `style="left: ${cuadradoCoordenadaX}px; position: absolute; top: ${cuadradoCoordenadaY}px; z-index: 1;" `;
                plantillaCuadrados += `width="72px">`;
                $("#contenedorTablero").append(plantillaCuadrados);

                if (this.listaPosiciones[i].disponibilidad === false && this.listaPosiciones[i].nombre !== posicionPersonaje) {

                    let plantillaBotones = `<button `;
                    plantillaBotones += `class="btn btn-link-primary" `;
                    plantillaBotones += `id="botonAtaque${this.listaPosiciones[i].nombre}" `;
                    plantillaBotones += `onclick="atacarPersonaje()" `;
                    plantillaBotones += `style="left: ${botonCoordendaX}px; position: absolute; top: ${botonCoordenadaY}px; z-index: 4;" `;
                    plantillaBotones += `src="../../Imagenes/Cuadrados/RojoA.png" `;
                    plantillaBotones += `title="Posición: ${this.listaPosiciones[i].nombre}">`;
                    plantillaBotones += `<i class="fa-solid fa-arrows-to-circle"></i></button>`;
                    $("#contenedorTablero").append(plantillaBotones);

                    let botonAtaque = {

                        "id": this.listaPosiciones[i].nombre
                    }

                    this.listaBotonesAtaque.push(botonAtaque);
                }

                let cuadradoAtaque = {

                    "id": this.listaPosiciones[i].nombre
                }               

                this.listaCuadradosAtaque.push(cuadradoAtaque);
                
            }

            if (this.listaPosiciones[i].columna === x) {

                if (this.listaPosiciones[i].fila < fila) {

                    incrementoIzquierdo = (incrementoIzquierdo + 1);
                    incrementoDerecho = (incrementoDerecho + 1);

                } else {

                    incrementoIzquierdo = (incrementoIzquierdo - 1);
                    incrementoDerecho = (incrementoDerecho - 1);
                }
            }

        }
    }
}

function crearCuadradosMovimiento() {
    
    sessionStorage.setItem("botonMovimientoPresionado", "BOTON PRESIONADO");
    document.getElementById("botonMoverse").setAttribute("disabled", true);
    cancelarAtaque();
    let idPersonajeTurno = parseInt(sessionStorage.getItem("idPersonajeTurno"));
    let provisorioMovimientoPersonaje;
    let movimientoPersonaje;
    let posicionPersonaje;    
    let columna;
    let fila;    
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {
        
        let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
        document.getElementById(idImagenPersonaje).style.opacity = "0.5";

        if (this.listaPersonajes[i].id === idPersonajeTurno) {
            
            provisorioMovimientoPersonaje = this.listaPersonajes[i].movimiento;
            posicionPersonaje = this.listaPersonajes[i].posicion;  
        }
    }    

    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].nombre === posicionPersonaje) {

            columna = this.listaPosiciones[i].columna;
            fila = this.listaPosiciones[i].fila;
        }
    }
        
    movimientoPersonaje = parseInt(provisorioMovimientoPersonaje);    
    let limiteVerticalSuperior = (fila - movimientoPersonaje);
    let limiteVerticalInferior = (fila + movimientoPersonaje);    
    let incrementoIzquierdo = 0;
    let incrementoDerecho = 0;
    
    if (limiteVerticalSuperior === 0) {
        
        limiteVerticalSuperior = 1;
        incrementoIzquierdo = (1);
        incrementoDerecho = (1);
        
    } else if (limiteVerticalSuperior < 0) {
        
        let y = ((limiteVerticalSuperior * -1) + 1);
        
        limiteVerticalSuperior = 1;
        incrementoIzquierdo = (y);
        incrementoDerecho = (y);
    }   
    
    let x;    
    
    if (columna === 20) {
        
        x = 19;     
        
    } else {
        
        x = 20;
    }
    
    for (let i = 0; i < this.listaPosiciones.length; i++) {

        if (this.listaPosiciones[i].disponibilidad === true) {

            if (this.listaPosiciones[i].fila >= limiteVerticalSuperior & this.listaPosiciones[i].fila <= limiteVerticalInferior) {

                if (this.listaPosiciones[i].columna >= (columna - incrementoIzquierdo) & this.listaPosiciones[i].columna <= (columna + incrementoDerecho)) {

                    let cuadradoCoordenadaX = (this.listaPosiciones[i].coordenadaX7 - 8);
                    let botonCoordendaX = (this.listaPosiciones[i].coordenadaX7 + 5);
                    let cuadradoCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 4);
                    let botonCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 5);                    
                    let plantillaCuadrados = `<img `;
                    plantillaCuadrados += `height="36px" `;
                    plantillaCuadrados += `id="cuadradoMovimiento${this.listaPosiciones[i].nombre}" `;
                    plantillaCuadrados += `src="../../Imagenes/Cuadrados/AzulA.png" `;
                    plantillaCuadrados += `style="left: ${cuadradoCoordenadaX}px; position: absolute; top: ${cuadradoCoordenadaY}px; z-index: 1;" `;
                    plantillaCuadrados += `width="72px">`;      
                    $("#contenedorTablero").append(plantillaCuadrados);                    
                    let plantillaBotones = `<button `;
                    plantillaBotones += `class="btn btn-link-primary" `;
                    plantillaBotones += `id="botonMovimiento${this.listaPosiciones[i].nombre}" `;
                    plantillaBotones += `onclick="seleccionarPosicion('${this.listaPosiciones[i].nombre}', '${idPersonajeTurno}', '${this.listaPosiciones[i].coordenadaX7}', '${this.listaPosiciones[i].coordenadaY1}')" `;
                    plantillaBotones += `src="../../Imagenes/Cuadrados/AzulA.png" `;
                    plantillaBotones += `style="left: ${botonCoordendaX}px; position: absolute; top: ${botonCoordenadaY}px; z-index: 4;" `;
                    plantillaBotones += `title="Posición: ${this.listaPosiciones[i].nombre}">`;
                    plantillaBotones += `<i class="fa-solid fa-arrows-to-circle"></i></button>`;                    
                    $("#contenedorTablero").append(plantillaBotones);
                    
                    let cuadradoMovimiento = {
                        
                        "id" : this.listaPosiciones[i].nombre
                    }
                    
                    let botonMovimiento = {
                        
                        "id" : this.listaPosiciones[i].nombre
                    }
                    
                    this.listaCuadradosMovimiento.push(cuadradoMovimiento);
                    this.listaBotonesMovimiento.push(botonMovimiento);
                }
                
                if (this.listaPosiciones[i].columna === x) {

                    if (this.listaPosiciones[i].fila < fila) {
                        
                        incrementoIzquierdo = (incrementoIzquierdo + 1);
                        incrementoDerecho = (incrementoDerecho + 1);

                    } else {
                        
                        incrementoIzquierdo = (incrementoIzquierdo - 1);
                        incrementoDerecho = (incrementoDerecho - 1);
                    }
                }
            }
        }
    }
}

function crearCuadradosMovimientoJugadorTestigo(posicionFinal) {
    
    let idPersonajeTurno = parseInt(sessionStorage.getItem("idPersonajeTurno"));
    let idUsuario = parseInt(sessionStorage.getItem("idUsuario"));
    let jugadorTestigo = false;

    for (let i = 0; i < this.listaPersonajes.length; i++) {

        if (this.listaPersonajes[i].id === idPersonajeTurno) {

            if (this.listaPersonajes[i].idUsuario !== idUsuario) {

                jugadorTestigo = true;
            }
        }
    }

    if (jugadorTestigo === true) {       
       
        let provisorioMovimientoPersonaje;
        let movimientoPersonaje;
        let posicionPersonaje;
        let columna;
        let fila;

        for (let i = 0; i < this.listaPersonajes.length; i++) {

            if (this.listaPersonajes[i].id !== idPersonajeTurno) {

                let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
                document.getElementById(idImagenPersonaje).style.opacity = "0.5";
            }

            if (this.listaPersonajes[i].id === idPersonajeTurno) {

                provisorioMovimientoPersonaje = this.listaPersonajes[i].movimiento;
                posicionPersonaje = this.listaPersonajes[i].posicion;
            }
        }

        for (let i = 0; i < this.listaPosiciones.length; i++) {

            if (this.listaPosiciones[i].nombre === posicionPersonaje) {

                columna = this.listaPosiciones[i].columna;
                fila = this.listaPosiciones[i].fila;
            }
        }

        movimientoPersonaje = parseInt(provisorioMovimientoPersonaje);
        let limiteVerticalSuperior = (fila - movimientoPersonaje);
        let limiteVerticalInferior = (fila + movimientoPersonaje);
        let incrementoIzquierdo = 0;
        let incrementoDerecho = 0;

        if (limiteVerticalSuperior === 0) {

            limiteVerticalSuperior = 1;
            incrementoIzquierdo = (1);
            incrementoDerecho = (1);

        } else if (limiteVerticalSuperior < 0) {

            let y = ((limiteVerticalSuperior * -1) + 1);

            limiteVerticalSuperior = 1;
            incrementoIzquierdo = (y);
            incrementoDerecho = (y);
        }

        let x;

        if (columna === 20) {

            x = 19;

        } else {

            x = 20;
        }

        for (let i = 0; i < this.listaPosiciones.length; i++) {

            if (this.listaPosiciones[i].disponibilidad === true) {

                if (this.listaPosiciones[i].fila >= limiteVerticalSuperior & this.listaPosiciones[i].fila <= limiteVerticalInferior) {

                    if (this.listaPosiciones[i].columna >= (columna - incrementoIzquierdo) & this.listaPosiciones[i].columna <= (columna + incrementoDerecho)) {

                        let cuadradoCoordenadaX = (this.listaPosiciones[i].coordenadaX7 - 8);
                        let cuadradoCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 4);
                        let plantillaCuadrados = `<img `;
                        plantillaCuadrados += `height="36px" `;
                        plantillaCuadrados += `id="cuadradoMovimiento${this.listaPosiciones[i].nombre}" `;
                        plantillaCuadrados += `src="../../Imagenes/Cuadrados/AzulA.png" `;
                        plantillaCuadrados += `style="left: ${cuadradoCoordenadaX}px; position: absolute; top: ${cuadradoCoordenadaY}px; z-index: 1;" `;
                        plantillaCuadrados += `width="72px">`;
                        $("#contenedorTablero").append(plantillaCuadrados);

                        let cuadradoMovimiento = {

                            "id": this.listaPosiciones[i].nombre
                        }

                        this.listaCuadradosMovimiento.push(cuadradoMovimiento);
                    }

                    if (this.listaPosiciones[i].columna === x) {

                        if (this.listaPosiciones[i].fila < fila) {

                            incrementoIzquierdo = (incrementoIzquierdo + 1);
                            incrementoDerecho = (incrementoDerecho + 1);

                        } else {

                            incrementoIzquierdo = (incrementoIzquierdo - 1);
                            incrementoDerecho = (incrementoDerecho - 1);
                        }
                    }
                }
            }
        }

        let cuadradoCoordenadaX;
        let cuadradoCoordenadaY;

        for (let i = 0; i < this.listaPosiciones.length; i++) {

            if (this.listaPosiciones[i].nombre === posicionFinal) {

                cuadradoCoordenadaX = (this.listaPosiciones[i].coordenadaX7 - 8);
                cuadradoCoordenadaY = (this.listaPosiciones[i].coordenadaY1 - 4);
            }
        }

        let plantillaCuadrado = `<img `;
        plantillaCuadrado += `height="36px" `;
        plantillaCuadrado += `id="cuadradoSeleccionado" `;
        plantillaCuadrado += `src="../../Imagenes/Cuadrados/AzulB.png" `;
        plantillaCuadrado += `style="left: ${cuadradoCoordenadaX}px; position: absolute; top: ${cuadradoCoordenadaY}px; z-index: 2;" `;
        plantillaCuadrado += `width="72px">`;
        $("#contenedorTablero").append(plantillaCuadrado);
    }
}

var movimiento = {
    
    "idPersonaje": "",
    "idTurno": "",
    "orientacion": "",
    "direccion": "",        
    "posicionInicial": "",
    "posicionFinal": ""    
}

function seleccionarPosicion(a, b, c, d) {
    
    let coordenadaX = (parseInt(c) - 8);
    let coordenadaY = (parseInt(d) - 4);    
    let plantillaCuadrado = `<img `;
    plantillaCuadrado += `height="36px" `;
    plantillaCuadrado += `id="cuadradoSeleccionado" `;
    plantillaCuadrado += `src="../../Imagenes/Cuadrados/AzulB.png" `;
    plantillaCuadrado += `style="left: ${coordenadaX}px; position: absolute; top: ${coordenadaY}px; z-index: 2;" `;
    plantillaCuadrado += `width="72px">`;
    $("#contenedorTablero").append(plantillaCuadrado);
    
    let posicionFinal = a;        
    
    for (let i = 0; i < this.listaBotonesMovimiento.length; i++) {
        
        let idBotonMovimientoDesactivar = "botonMovimiento" + this.listaBotonesMovimiento[i].id;        
        document.getElementById(idBotonMovimientoDesactivar).disabled = true;
    }
    
    let idPersonaje = parseInt(sessionStorage.getItem("idPersonajeTurno"));    
    let posicionInicial;
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {

        if (this.listaPersonajes[i].id === idPersonaje) {

            posicionInicial = this.listaPersonajes[i].posicion;
        }
    }
    
    this.movimiento = {
        "idPersonaje": b,
        "idTurno": sessionStorage.getItem("idTurno"),
        "orientacion" : "",
        "direccion" : "",        
        "posicionInicial": posicionInicial,
        "posicionFinal": posicionFinal        
    }
    
    $("#panelMensajesMovimiento").modal("show");        
}

function registrarMovimiento() {    
    
    sessionStorage.setItem("movimientoRealizado", "MOVIMIENTO REALIZADO");
    document.getElementById("botonMoverse").setAttribute("disabled", true);
    this.movimiento;   
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {

        if (this.listaPersonajes[i].id === parseInt(this.listaMovimientos.idPersonaje)) {

            let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
            document.getElementById(idImagenPersonaje).style.opacity = "1";
        }
    }
    
    let contenedorTablero = document.getElementById("contenedorTablero");

    for (let i = 0; i < this.listaBotonesMovimiento.length; i++) {

        let idBotonMovimiento = "botonMovimiento" + this.listaBotonesMovimiento[i].id;
        let botonMovimiento = document.getElementById(idBotonMovimiento);
        contenedorTablero.removeChild(botonMovimiento);
    }

    this.listaBotonesMovimiento = []; 
    let backendUrl = sessionStorage.getItem("backendURL");
    let url = backendUrl + "/" + "index.php/batallas?movimiento=" + JSON.stringify(this.movimiento);

    $.ajax({
        url: url,
        method: "POST",
        success: function (provisoriaRespuesta) {
            
            if (provisoriaRespuesta !== "Movimiento registrado.") {
                
                $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text("Ha ocurrido un error al intentar registrar el movimiento en la base de datos."); 
                
            } else {
                
                this.movimiento = {
                    
                    "idPersonaje": "",
                    "idTurno": "",
                    "orientacion": "",
                    "direccion": "",
                    "posicionInicial": "",
                    "posicionFinal": ""
                };
            }
        }
    });    
}

function atacarPersonaje() {    
    
   for (let i = 0; i < this.listaPersonajes.length; i++) {
        
        let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
        document.getElementById(idImagenPersonaje).style.opacity = "1";
    }        
    
    let contenedorTablero = document.getElementById("contenedorTablero");

    for (let i = 0; i < this.listaBotonesAtaque.length; i++) {

        let idBotonAtaque = "botonAtaque" + this.listaBotonesAtaque[i].id;
        let botonAtaque = document.getElementById(idBotonAtaque);
        contenedorTablero.removeChild(botonAtaque);
    }

    for (let i = 0; i < this.listaCuadradosAtaque.length; i++) {

        let idCuadradoAtaque = "cuadradoAtaque" + this.listaCuadradosAtaque[i].id;
        let cuadradoAtaque = document.getElementById(idCuadradoAtaque);
        contenedorTablero.removeChild(cuadradoAtaque);
    }
    
    this.listaBotonesAtaque = [];
    this.listaCuadradosAtaque = [];
    
    $("#panelAnimacionAtaque").modal("show");
    let numeroImagen = 1;
    let velocidadAnimacion = 250;

    setTimeout(function () {

        function animarAtaque() {

            let imagen = `../../Imagenes/Ataques/${numeroImagen}.png`;
            document.getElementById("animacionAtaque").src = imagen;
            numeroImagen++;

            if (numeroImagen === 6) {

                clearInterval(idEjecutorFuncion);
                $("#panelAnimacionAtaque").modal("hide");
            }
        }

        idEjecutorFuncion = setInterval(animarAtaque, velocidadAnimacion);

    }, 500);
}

function moverPersonaje(idMovimiento, provisoriaPosicionInicial, provisoriaPosicionFinal) {
    
    sessionStorage.setItem("accionRealizada", "ACCION REALIZADA");    
    let idUsuario = parseInt(sessionStorage.getItem("idUsuario"));    
    let idPersonaje = parseInt(sessionStorage.getItem("idPersonajeTurno"));
    let jugadorActivo = false;  
    let colorPersonaje;
    let categoriaPersonaje;
    let idImagenPersonaje = "personaje" + idPersonaje;
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {

        if (this.listaPersonajes[i].id === idPersonaje) {

            colorPersonaje = this.listaPersonajes[i].color;
            categoriaPersonaje = this.listaPersonajes[i].categoria;
            document.getElementById(idImagenPersonaje).style.opacity = "1";

            if (this.listaPersonajes[i].idUsuario === idUsuario) {

                jugadorActivo = true;
            }
        }
    } 
    
    let posicionInicial = provisoriaPosicionInicial;
    let posicionFinal = provisoriaPosicionFinal;
    let coordenadaInicialX;
    let coordenadaInicialY;
    let columnaInicial;
    let filaInicial;
    let coordenadaFinalX;
    let coordenadaFinalY; 
    let columnaFinal;
    let filaFinal;
    
    for (let i = 0; i < this.listaPosiciones.length; i++) {
        
        if (this.listaPosiciones[i].nombre === posicionInicial) {

            coordenadaInicialX = parseInt(this.listaPosiciones[i].coordenadaX7);
            coordenadaInicialY = parseInt(this.listaPosiciones[i].coordenadaY1);
            columnaInicial = parseInt(this.listaPosiciones[i].columna);
            filaInicial = parseInt(this.listaPosiciones[i].fila);
        }
        
        if (this.listaPosiciones[i].nombre === posicionFinal) {

            coordenadaFinalX = parseInt(this.listaPosiciones[i].coordenadaX7);
            coordenadaFinalY = parseInt(this.listaPosiciones[i].coordenadaY1);
            columnaFinal = parseInt(this.listaPosiciones[i].columna);
            filaFinal = parseInt(this.listaPosiciones[i].fila);
        }        
    }
    
    let direccion;
    let orientacion;
    
    if (columnaInicial === columnaFinal & filaInicial > filaFinal) {
        
        direccion = "ARRIBA";
        orientacion = "Arriba";
        
    } else if (columnaInicial < columnaFinal & filaInicial > filaFinal) {
        
        direccion = "ARRIBA Y DERECHA";
        orientacion = "Arriba";
        
    } else if (columnaInicial < columnaFinal & filaInicial === filaFinal) {
        
        direccion = "DERECHA";  
        orientacion = "Derecha";
        
    } else if (columnaInicial < columnaFinal & filaInicial < filaFinal) {
        
        direccion = "ABAJO Y DERECHA"; 
        orientacion = "Derecha";
        
    } else if (columnaInicial === columnaFinal & filaInicial < filaFinal) {
        
        direccion = "ABAJO"; 
        orientacion = "Abajo";
        
    } else if (columnaInicial > columnaFinal & filaInicial < filaFinal) {
        
        direccion = "ABAJO Y IZQUIERDA"; 
        orientacion = "Abajo";
        
    } else if (columnaInicial > columnaFinal & filaInicial === filaFinal) {
        
        direccion = "IZQUIERDA";
        orientacion = "Izquierda";
        
    } else if (columnaInicial > columnaFinal & filaInicial > filaFinal) {
        
        direccion = "ARRIBA Y IZQUIERDA";
        orientacion = "Izquierda";
    }
    
    let velocidadAnimacion = 100;

    function terminarMovimiento() {

        clearInterval(idEjecutorFuncion);

        for (let i = 0; i < this.listaPosiciones.length; i++) {

            if (this.listaPosiciones[i].nombre === posicionInicial) {

                this.listaPosiciones[i].disponibilidad = true;
            }

            if (this.listaPosiciones[i].nombre === posicionFinal) {

                this.listaPosiciones[i].disponibilidad = false;
            }
        }

        for (let i = 0; i < this.listaPersonajes.length; i++) {

            let idImagenPersonaje = "personaje" + this.listaPersonajes[i].id;
            document.getElementById(idImagenPersonaje).style.opacity = "1";

            if (this.listaPersonajes[i].id === idPersonaje) {

                this.listaPersonajes[i].posicion = posicionFinal;
            }
        }
        
        let contenedorTablero = document.getElementById("contenedorTablero");  

        for (let i = 0; i < this.listaCuadradosMovimiento.length; i++) {

            let idCuadradoMovimiento = "cuadradoMovimiento" + this.listaCuadradosMovimiento[i].id;
            let cuadradoMovimiento = document.getElementById(idCuadradoMovimiento);           
            contenedorTablero.removeChild(cuadradoMovimiento);
        }

        this.listaCuadradosMovimiento = [];
        let cuadradoSeleccionado = document.getElementById("cuadradoSeleccionado");
        contenedorTablero.removeChild(cuadradoSeleccionado);
               
        if (jugadorActivo === true) {

            let terminarMovimiento = {

                "idMovimiento": idMovimiento,
                "orientacion": orientacion
            };

            let backendUrl = sessionStorage.getItem("backendURL");
            let url = backendUrl + "/" + "index.php/batallas?terminarMovimiento=" + JSON.stringify(terminarMovimiento);

            $.ajax({
                url: url,
                method: "PUT",
                success: function (provisoriaRespuesta) {

                    if (provisoriaRespuesta !== "Movimiento terminado.") {

                        $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                        $("#alertaVisual").addClass("show").removeClass("fade");
                        $("#mensajeAlertaVisual").text("Ha ocurrido un error al intentar registrar el termino del movimiento en la base de datos.");

                    } else {
                        
                        sessionStorage.setItem("accionRealizada", "ACCION NO REALIZADA"); 
                        buscarTurno();
                    }
                }
            });
            
        } else {
            
            sessionStorage.setItem("accionRealizada", "ACCION NO REALIZADA");             
            buscarTurno();
        }
    }

    if (direccion === "ARRIBA") {
        
        let imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Arriba.png`;
        document.getElementById(idImagenPersonaje).src = imagen;             
        let movimientos = 0;
        let destino = (coordenadaFinalX - coordenadaInicialX); 
        
        function animacion() {

            if (movimientos < destino) {  
                
                avanceHorizontalTemporal = ((coordenadaInicialX + 8) + movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 46) - (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;
                movimientos = (movimientos + 4);

            } else {
                
                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "ARRIBA Y DERECHA") {
        
        let imagen;  
        let destinoHorizontal = (coordenadaFinalX - (coordenadaInicialX));
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY); 
        let direccionInterna;
        let destinoVertical; 
        
        if (coordenadaInicialY < coordenadaFinalY) {            
            
            destinoVertical = (coordenadaFinalY - coordenadaInicialY);
            direccionInterna = "ABAJO";     
            
        } else if (coordenadaInicialY === coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - coordenadaFinalY );
            direccionInterna = "NINGUNA"; 
            
        } else if (coordenadaInicialY > coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - coordenadaFinalY);
            direccionInterna = "ARRIBA"; 
        }        
        
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0; 
        
        function animacion() {

            if (movimientosVerticales < destinoVertical) { 

                if (direccionInterna === "ABAJO") {

                    avanceVerticalTemporal = (coordenadaActualY + movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Abajo.png`;
                    document.getElementById(idImagenPersonaje).src = imagen; 

                } else if (direccionInterna === "NINGUNA") {

                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Arriba.png`;
                    document.getElementById(idImagenPersonaje).src = imagen; 
                    
                } else if (direccionInterna === "ARRIBA") {
                    
                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Arriba.png`;
                    document.getElementById(idImagenPersonaje).src = imagen; 
                }

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;
                movimientosVerticales = (movimientosVerticales + 2);

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {
                                
                avanceHorizontalTemporal = ((coordenadaActualX + 0) + movimientosHorizontales);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                movimientosHorizontales = (movimientosHorizontales + 4);
                imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Derecha.png`;
                document.getElementById(idImagenPersonaje).src = imagen; 
                
            } else {

                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "DERECHA") {
        
        let imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Derecha.png`;
        document.getElementById(idImagenPersonaje).src = imagen;          
        let movimientos = 0;
        let destino = (coordenadaFinalX - coordenadaInicialX); 
        
        function animacion() {

            if (movimientos < destino) {     
                
                avanceHorizontalTemporal = ((coordenadaInicialX + 8) + movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 42) + (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;
                movimientos = (movimientos + 4);

            } else {

                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);
        
    } else if (direccion === "ABAJO Y DERECHA") {
        
        let imagen;        
        let destinoHorizontal;  
        let direccionInterna;  
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        
        if (coordenadaInicialX < coordenadaFinalX) {            
            
            destinoHorizontal = (coordenadaFinalX - coordenadaInicialX);            
            direccionInterna = "DERECHA";
            
        } else if (coordenadaInicialX === coordenadaFinalX) {
            
            destinoHorizontal = coordenadaInicialX;
            direccionInterna = "NINGUNA"; 
            
        } else if (coordenadaInicialX > coordenadaFinalX) {
            
            destinoHorizontal = (coordenadaInicialX - coordenadaFinalX);
            direccionInterna = "IZQUIERDA"; 
        }          
        
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY);         
        let destinoVertical = (coordenadaFinalY - (coordenadaInicialY - 2));
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0;
        
        function animacion() {            
            
            if (movimientosVerticales < destinoVertical) { 
                
                avanceVerticalTemporal = (coordenadaActualY + movimientosVerticales);
                avanceVertical = avanceVerticalTemporal + "px";
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;
                movimientosVerticales = (movimientosVerticales + 2);
                imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Abajo.png`;
                document.getElementById(idImagenPersonaje).src = imagen;

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {  
                                
                if (direccionInterna === "DERECHA") {
                    
                    avanceHorizontalTemporal = (coordenadaActualX + movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Derecha.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;

                } else if (direccionInterna === "NINGUNA") {
                    
                    avanceHorizontalTemporal = (coordenadaActualX);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    movimientosHorizontales = (destinoHorizontal + 0);
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Izquierda.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;
                    
                } else if (direccionInterna === "IZQUIERDA") {
                    
                    avanceHorizontalTemporal = (coordenadaActualX - movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Izquierda.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;
                }

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;                
                movimientosHorizontales = (movimientosHorizontales + 4);

            } else if (movimientosHorizontales === destinoHorizontal & movimientosVerticales === destinoVertical) {
                
                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "ABAJO") {
        
        let imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Abajo.png`;
        document.getElementById(idImagenPersonaje).src = imagen;  
        let destino = (coordenadaInicialX - coordenadaFinalX);        
        let movimientos = 0;
        
        function animacion() {

            if (movimientos < destino) {  
                
                avanceHorizontalTemporal = ((coordenadaInicialX + 4) - movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 42) + (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;
                movimientos = (movimientos + 4);

            } else {

                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);
        
    } else if (direccion === "ABAJO Y IZQUIERDA") {
        
        let imagen;   
        let destinoHorizontal = (coordenadaInicialX - coordenadaFinalX);        
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY); 
        let direccionInterna;
        let destinoVertical
        
        if (coordenadaInicialY < coordenadaFinalY) {            
            
            destinoVertical = (coordenadaFinalY - coordenadaInicialY);            
            direccionInterna = "ABAJO";
            
        } else if (coordenadaInicialY === coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - coordenadaFinalY);
            direccionInterna = "NINGUNA"; 
            
        } else if (coordenadaInicialY > coordenadaFinalY) {
            
            destinoVertical = (coordenadaInicialY - coordenadaFinalY);
            direccionInterna = "ARRIBA";
            
        }        
        
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0;
                
        function animacion() {

            if (movimientosVerticales < destinoVertical) {
                
                if (direccionInterna === "ABAJO") {
                    
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Abajo.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;
                    avanceVerticalTemporal = (coordenadaActualY + movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";

                } else if (direccionInterna === "NINGUNA") {
                    
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Izquierda.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;
                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                    
                } else if (direccionInterna === "ARRIBA") {
                    
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Arriba.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;                    
                    avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                    avanceVertical = avanceVerticalTemporal + "px";
                }    

                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;
                movimientosVerticales = (movimientosVerticales + 2);

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {
                
                imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Izquierda.png`;
                document.getElementById(idImagenPersonaje).src = imagen;                
                avanceHorizontalTemporal = (coordenadaActualX - movimientosHorizontales);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;                
                movimientosHorizontales = (movimientosHorizontales + 4);
                
            } else {

                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);;

    } else if (direccion === "IZQUIERDA") {
        
        let imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Izquierda.png`;
        document.getElementById(idImagenPersonaje).src = imagen; 
        let destino = (coordenadaInicialX - coordenadaFinalX); 
        let movimientos = 0;
        
        function animacion() {

            if (movimientos < destino) {  
                
                avanceHorizontalTemporal = ((coordenadaInicialX + 4) - movimientos);
                avanceHorizontal = avanceHorizontalTemporal + "px";
                avanceVerticalTemporal = ((coordenadaInicialY - 46) - (movimientos / 2));
                avanceVertical = avanceVerticalTemporal + "px";
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;

                movimientos = (movimientos + 4);

            } else {

                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }
        
        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);

    } else if (direccion === "ARRIBA Y IZQUIERDA") {
        
        let imagen;        
        let destinoHorizontal;
        let coordenadaX = document.getElementById(idImagenPersonaje).style.left;
        let arrayCoordenadaX = coordenadaX.split("px");
        let provisoriaCoordenadaActualX = arrayCoordenadaX[0];
        let coordenadaActualX = parseInt(provisoriaCoordenadaActualX);        
        let coordenadaY = document.getElementById(idImagenPersonaje).style.top;        
        let arrayCoordenadaY = coordenadaY.split("px");
        let provisoriaCoordenadaActualY = arrayCoordenadaY[0];
        let coordenadaActualY = parseInt(provisoriaCoordenadaActualY);         
        let destinoVertical = (coordenadaInicialY - coordenadaFinalY);
        let direccionInterna;
                        
        if (coordenadaInicialX < coordenadaFinalX) { 
            
            destinoHorizontal = (coordenadaFinalX - coordenadaInicialX);                
            direccionInterna = "DERECHA";
            
        } else if (coordenadaInicialX === coordenadaFinalX){
            
            destinoHorizontal = coordenadaInicialX;            
            direccionInterna = "NINGUNA"; 
        
        } else if (coordenadaInicialX > coordenadaFinalX) {
            
            destinoHorizontal = (coordenadaInicialX - coordenadaFinalX);                 
            direccionInterna = "IZQUIERDA"; 
        }          
        
        let movimientosHorizontales = 0;
        let movimientosVerticales = 0;
        
        function animacion() {
            
            if (movimientosVerticales < destinoVertical) {
                
                imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Arriba.png`;                
                document.getElementById(idImagenPersonaje).src = imagen;                 
                avanceVerticalTemporal = (coordenadaActualY - movimientosVerticales);
                avanceVertical = avanceVerticalTemporal + "px";
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.top = avanceVertical;
                movimientosVerticales = (movimientosVerticales + 2);

            } else if (movimientosHorizontales < destinoHorizontal & movimientosVerticales === destinoVertical) {
                                
                if (direccionInterna === "DERECHA") {
                    
                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Derecha.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;
                    avanceHorizontalTemporal = ((coordenadaActualX + 4) + movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px";

                } else if (direccionInterna === "NINGUNA") {

                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Izquierda.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;
                    avanceHorizontalTemporal = (coordenadaActualX);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                    movimientosHorizontales = (destinoHorizontal - 4);

                } else if (direccionInterna === "IZQUIERDA") {

                    imagen = `../../Imagenes/Personajes/Miniaturas/${colorPersonaje}/${categoriaPersonaje}/Izquierda.png`;
                    document.getElementById(idImagenPersonaje).src = imagen;
                    avanceHorizontalTemporal = ((coordenadaActualX - 4) - movimientosHorizontales);
                    avanceHorizontal = avanceHorizontalTemporal + "px";
                }  
                
                document.getElementById(idImagenPersonaje).style.position = "absolute";
                document.getElementById(idImagenPersonaje).style.left = avanceHorizontal;                
                movimientosHorizontales = (movimientosHorizontales + 4);
                
            } else {

                clearInterval(idEjecutorFuncion);
                terminarMovimiento();
            }
        }

        idEjecutorFuncion = setInterval(animacion, velocidadAnimacion);
    }  
}

function obtenerDatosPersonaje () {
    
    let idPersonaje = parseInt(sessionStorage.getItem("idPersonajeTurno"));    
    
    for (let i = 0; i < this.listaPersonajes.length; i++) {
        
        if (this.listaPersonajes[i].id === idPersonaje) {
            
            $("#campoNombrePersonaje").val(this.listaPersonajes[i].nombre);            
            let idUsuario1 = parseInt(sessionStorage.getItem("idUsuario1"));            
            let imagenRetrato;
            
            if (this.listaPersonajes[i].idUsuario === idUsuario1) {
                
                imagenRetrato = `../../Imagenes/Personajes/Retratos/${this.listaPersonajes[i].categoria}/${sessionStorage.getItem("colorUsuario1")}.png`;
                document.getElementById("retratoPersonaje").src = imagenRetrato; 
                $("#campoNombreJugador").val(sessionStorage.getItem("nombreUsuario1"));  
                
            } else {
                
                imagenRetrato = `../../Imagenes/Personajes/Retratos/${this.listaPersonajes[i].categoria}/${sessionStorage.getItem("colorUsuario2")}.png`;
                document.getElementById("retratoPersonaje").src = imagenRetrato;
                $("#campoNombreJugador").val(this.listaPersonajes[i].nombre);
                $("#campoNombreJugador").val(sessionStorage.getItem("nombreUsuario2")); 
            }   
            
            let coordenadaX;
            let coordenadaY;
            
            for (let j = 0; j < this.listaPosiciones.length; j++) {

                if (this.listaPersonajes[i].posicion === this.listaPosiciones[j].nombre) {

                    coordenadaX = (this.listaPosiciones[j].coordenadaX7 - 8);
                    coordenadaY = (this.listaPosiciones[j].coordenadaY1 - 4);
                }
            }            
            
            let idUsuario = parseInt(sessionStorage.getItem("idUsuario"));
            
            if (this.listaPersonajes[i].idUsuario === idUsuario) {
                
                if (sessionStorage.getItem("accionRealizada") === "ACCION NO REALIZADA") {

                    if (sessionStorage.getItem("ataqueRealizado") === "ATAQUE NO REALIZADO" && sessionStorage.getItem("botonAtaquePresionado") === "BOTON NO PRESIONADO") {

                        $("#botonAtacar").removeAttr("disabled");
                    }

                    if (sessionStorage.getItem("movimientoRealizado") === "MOVIMIENTO NO REALIZADO" && sessionStorage.getItem("botonMovimientoPresionado") === "BOTON NO PRESIONADO") {

                        $("#botonMoverse").removeAttr("disabled");
                    }

                    $("#botonTerminarTurno").removeAttr("disabled");
                    $("#botonRendirse").removeAttr("disabled");
                }
                
            } else {
                
                document.getElementById("botonAtacar").setAttribute("disabled", true);
                document.getElementById("botonHabilidad").setAttribute("disabled", true);
                document.getElementById("botonMoverse").setAttribute("disabled", true);
                document.getElementById("botonTerminarTurno").setAttribute("disabled", true);
                document.getElementById("botonRendirse").setAttribute("disabled", true);
            }
        }        
    }    
}

function terminarTurno() {
    
    sessionStorage.setItem("accionRealizada", "ACCION NO REALIZADA");
    sessionStorage.setItem("ataqueRealizado", "ATAQUE NO REALIZADO");
    sessionStorage.setItem("movimientoRealizado", "MOVIMIENTO NO REALIZADO");
    sessionStorage.setItem("botonAtaquePresionado", "BOTON NO PRESIONADO");
    sessionStorage.setItem("botonMovimientoPresionado", "BOTON NO PRESIONADO");

    let terminarTurno = {
        
        "idDesafio": sessionStorage.getItem("idDesafio"),
        "idBatalla": sessionStorage.getItem("idBatalla"),
        "idPersonaje": sessionStorage.getItem("idPersonajeTurno"),
        "idTurno": sessionStorage.getItem("idTurno"),
        "numeroTurno": $("#campoNumeroTurno").val()                    
    };
    
    let backendUrl = sessionStorage.getItem("backendURL");
    let url = backendUrl + "/" + "index.php/batallas?terminarTurno=" + JSON.stringify(terminarTurno);

    $.ajax({
        url: url,
        method: "PUT",
        success: function (provisoriaRespuestaExterior) {
            
            console.log(provisoriaRespuestaExterior);
            
        }
    });
}

function buscarTurno() {  
    
    function buscar() {

        let batalla = {

            "id": sessionStorage.getItem("idBatalla"),
        };
        
        let backendUrl = sessionStorage.getItem("backendURL");
        let url = backendUrl + "/" + "index.php/batallas?batalla=" + JSON.stringify(batalla);

        $.ajax({
            url: url,
            method: "GET",
            success: function (provisoriaRespuestaExterior) {
                
                console.log(provisoriaRespuestaExterior);

                if (provisoriaRespuestaExterior === "La batalla ha terminado.") {
                    
                    console.log("LA BATALLA HA TERMINADO...");
                    
                    let resultadoBatalla = {

                        "idBatalla": sessionStorage.getItem("idBatalla"),                        
                        "idUsuario": sessionStorage.getItem("idUsuario")
                    };
                    
                    url = backendUrl + "/" + "index.php/batallas?resultadoBatalla=" + JSON.stringify(resultadoBatalla);

                    $.ajax({
                        url: url,
                        method: "GET",
                        success: function (provisoriaRespuestaInterior) {                           
                            
                            let respuestaInterior = JSON.parse(provisoriaRespuestaInterior);
                            
                            console.log(respuestaInterior);

                            if (respuestaInterior[0].resultadoBatalla === "VICTORIA") {
                                
                                $("#panelMensajesVictoria").modal("show");

                            } else if (respuestaInterior[0].resultadoBatalla === "DERROTA") {

                                $("#panelMensajesDerrota").modal("show");
                            }
                        }
                    });
                    
                } else {

                    $("#panelMensajeCarga").modal("hide");
                    let provisoriaRespuestaTurno = JSON.parse(provisoriaRespuestaExterior);
                    sessionStorage.setItem("idTurno", provisoriaRespuestaTurno[0].idTurno);
                    sessionStorage.setItem("idPersonajeTurno", provisoriaRespuestaTurno[0].idPersonaje);
                    $("#campoNumeroTurno").val(provisoriaRespuestaTurno[0].numeroTurno);                   
                    
                    if (provisoriaRespuestaTurno[0].idMovimiento !== "SIN MOVIMIENTO") {
                        
                        clearInterval(idEjecutorFuncionExterior);                        
                        console.log("SE DETUVO EL BUSCADOR DE TURNOS...");
                        
                        let obtenerMovimiento = {
                            
                            "idPersonaje": sessionStorage.getItem("idPersonajeTurno"),
                            "idTurno": sessionStorage.getItem("idTurno")                            
                        };
                        
                        url = backendUrl + "/" + "index.php/batallas?obtenerMovimiento=" + JSON.stringify(obtenerMovimiento);

                        $.ajax({
                            url: url,
                            method: "GET",
                            success: function (provisoriaRespuestaInterior) {
                                
                                console.log(provisoriaRespuestaInterior);
                                
                                let respuestaInterior = JSON.parse(provisoriaRespuestaInterior);
                                $("#alertaVisual").addClass("alert-warning").removeClass("alert-danger").removeClass("alert-success");
                                $("#alertaVisual").addClass("show").removeClass("fade"); 
                                mensaje = "Un Personaje se está moviendo .";
                                $("#mensajeAlertaVisual").text(mensaje);                                
                                crearCuadradosMovimientoJugadorTestigo(respuestaInterior[0].posicionFinal);
                                moverPersonaje(respuestaInterior[0].idMovimiento, respuestaInterior[0].posicionInicial, respuestaInterior[0].posicionFinal);
                            }
                        });
                    }
                    
                    obtenerDatosPersonaje();
                }
            }
        });
        
        console.log("SE ESTÁ EJECUTANDO EL BUSCADOR DE TURNOS...");
    }

    idEjecutorFuncionExterior = setInterval(buscar, 4000);
}

function animacionMovimiento(secuenciaAnimacion, direccionAnimacion, colorPersonaje, idImagenPersonaje) {

    let imagen;

    if (secuenciaAnimacion === 1) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}.png`;

    } else if (secuenciaAnimacion === 2) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}.png`;

    } else if (secuenciaAnimacion === 3) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}.png`;

    } else if (secuenciaAnimacion === 4) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}.png`;

    } else if (secuenciaAnimacion === 5) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}.png`;

    } else if (secuenciaAnimacion === 6) {

        imagen = `../../Imagenes/Personajes/Miniaturas/Posturas/${direccionAnimacion}/${secuenciaAnimacion}${colorPersonaje}.png`;
        secuenciaAnimacion = 0;
    }

    document.getElementById(idImagenPersonaje).src = imagen;

    secuenciaAnimacion++;
    
    return secuenciaAnimacion;
}

function perderBatalla() {

    let perderBatalla = {

        "idBatalla": sessionStorage.getItem("idBatalla"),
        "idUsuario": sessionStorage.getItem("idUsuario")
    };
    let backendUrl = sessionStorage.getItem("backendURL");
    let url = backendUrl + "/" + "index.php/batallas?perderBatalla=" + JSON.stringify(perderBatalla);

    $.ajax({
        url: url,
        method: "PUT",
        success: function (provisoriaRespuesta) {

            if (provisoriaRespuesta !== "La batalla ha terminado.") {

                $("#alertaVisual").addClass("alert-danger").removeClass("alert-success").removeClass("alert-warning");
                $("#alertaVisual").addClass("show").removeClass("fade");
                $("#mensajeAlertaVisual").text("Ha ocurrido un error al intentar registrar que sea que se rendido en la base de datos.");
            }
        }
    });
}