let Estanteria_simple = {

    "posicion_x": 400,
    "posicion_y": 20,

    "spot_azul": {

        "estado": "libre"

    },


    "spot_marron":{

        "estado": "libre"

    }

}





let imagen_estanteria_simple = new Image();
imagen_estanteria_simple.src = "./img/estanteria_simple.png";



function dibujarEstanteriaSimple(context){


    context.drawImage(imagen_estanteria_simple, Estanteria_simple.posicion_x, Estanteria_simple.posicion_y, imagen_estanteria_simple.naturalWidth, imagen_estanteria_simple.naturalHeight);

}




