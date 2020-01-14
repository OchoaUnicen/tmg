
let imagen_ventanilla = new Image();
imagen_ventanilla.src = "./img/ventanilla.png";




let Ventanilla = {
    "posicion_x":290,
    "posicion_y": 90,
    "imagen": imagen_ventanilla
}



function dibujarVentanilla(context){


    context.drawImage(Ventanilla.imagen, Ventanilla.posicion_x, Ventanilla.posicion_y, Ventanilla.imagen.naturalWidth, Ventanilla.imagen.naturalHeight);

    

}