let imagen_start = new Image();
imagen_start.src = "./img/start.png";
let Interfaz = {


    "posicion_x": 20,
    "posicion_y": 20,
    "imagen":imagen_start
    
}



function dibujarInterfaz(context) {



    context.drawImage(Interfaz.imagen, Interfaz.posicion_x, Interfaz.posicion_y, Interfaz.imagen.naturalWidth, Interfaz.imagen.naturalHeight);

}



function iniciarPartida() {


    

}