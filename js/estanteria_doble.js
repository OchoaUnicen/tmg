let Estanteria_doble = {

    "posicion_x": 400,
    "posicion_y": 360,

    "spot_rojo": {

        "estado": "libre"

    },


    "spot_amarillo":{

        "estado": "libre"

    },
    "spot_verde":{

        "estado": "libre"

    },

    "spot_gris":{

        "estado": "libre"

    }




}

let imagen_estanteria_doble = new Image();
imagen_estanteria_doble.src = "./img/estanteria_doble.png";



function dibujarEstanteriaDoble(context){


    context.drawImage(imagen_estanteria_doble, Estanteria_doble.posicion_x, Estanteria_doble.posicion_y, imagen_estanteria_doble.naturalWidth, imagen_estanteria_doble.naturalHeight);

}


