
let imagen_crafter_ventanilla = new Image();
imagen_crafter_ventanilla.src = "./img/crafter_atendiendo.png";


let Crafter = {

    "imagen": imagen_crafter_ventanilla,
    "estado": "libre",
    "posicion_x": Ventanilla.posicion_x + 15,
    "posicion_y": Ventanilla.posicion_y + 35,


}



function dibujarCrafter(context){

    context.drawImage(Crafter.imagen, Crafter.posicion_x, Crafter.posicion_y, Crafter.imagen.naturalWidth, Crafter.imagen.naturalHeight);


}



