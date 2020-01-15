


let imagen_crafting_rojo = new Image();
imagen_crafting_rojo.src = "./img/crafting_rojo.png";

let imagen_crafting_amarillo = new Image();
imagen_crafting_amarillo.src = "./img/crafting_amarillo.png";

let imagen_crafting_azul = new Image();
imagen_crafting_azul.src = "./img/crafting_azul.png";

var Craftings = {

    "crafting_rojo":{
            
        "estado": "libre",
        "cooldown": 0,
        "imagen": imagen_crafting_rojo,
        "posicion_x": 20,
        "posicion_y":400
    },

    "crafting_azul":{
            
        "estado": "libre",
        "cooldown": 0,
        "imagen": imagen_crafting_azul,
        "posicion_x": 20,
        "posicion_y": 200
    },

    "crafting_amarillo":{
            
        "estado": "libre",
        "cooldown": 0,
        "imagen": imagen_crafting_amarillo,
        "posicion_x": 20,
        "posicion_y": 300
    }

}


    function dibujarCraftingRojo(context) {

        context.drawImage(Craftings.crafting_rojo.imagen, Craftings.crafting_rojo.posicion_x, Craftings.crafting_rojo.posicion_y, Craftings.crafting_rojo.imagen.naturalWidth,Craftings.crafting_rojo.imagen.naturalHeight);
      //  context.drawImage(crafting_rojo.imagen, crafting_rojo.posicion_x, crafting_rojo.posicion_y);

    }

    function dibujarCraftingAmarillo(context) {

        context.drawImage(Craftings.crafting_amarillo.imagen, Craftings.crafting_amarillo.posicion_x, Craftings.crafting_amarillo.posicion_y, Craftings.crafting_amarillo.imagen.naturalWidth,Craftings.crafting_amarillo.imagen.naturalHeight);
      //  context.drawImage(crafting_rojo.imagen, crafting_rojo.posicion_x, crafting_rojo.posicion_y);

    }

    function dibujarCraftingAzul(context) {

        context.drawImage(Craftings.crafting_azul.imagen, Craftings.crafting_azul.posicion_x, Craftings.crafting_azul.posicion_y, Craftings.crafting_azul.imagen.naturalWidth,Craftings.crafting_azul.imagen.naturalHeight);
      //  context.drawImage(crafting_rojo.imagen, crafting_rojo.posicion_x, crafting_rojo.posicion_y);

    }