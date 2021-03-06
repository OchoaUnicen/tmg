document.addEventListener('DOMContentLoaded', cargar_game_js);

function cargar_game_js() {

    "use strict";
    //compatibilidad con multiples navegadores
    let frame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    let canvas = document.getElementById('lienzo');
    let context = canvas.getContext('2d');



    //limites del mapa
    const LIMITE_IZQUIERDO = -10;
    const LIMITE_DERECHO = 920;
    const LIMITE_INFERIOR = 415;
    const LIMITE_SUPERIOR = -20;





    function crearMatriz(w, h) {
        const matriz = [];
        while (h--) {
            matriz.push(new Array(w).fill(0));

        }
        return matriz;
    }
    const mapa = crearMatriz(100, 50);

    //imagen del fondo
    let fondo = new Image();
    fondo.src = "./img/fondo.png";



    //---------------------------------------------------------------------------------------------------------------- 

    //sistema de movimiento Aca se incluye la clase teclas.js


    // document.addEventListener('keydown', (e) => {Teclas[e.keyCode] = true});
    // document.addEventListener('keyup', (e) => {Teclas[e.keyCode] = false });


    //----------------------------------------------------------------------------------------------------------------

//**********************************************************************************************/    
    canvas.onmousemove = function (e) {
        //   console.log(getMousePos(canvas, e));
    }
//**********************************************************************************************/


    canvas.addEventListener("click", function (evt) {
        var mousePos = getMousePos(canvas, evt);

        //si hace click en el boton start
        if (mousePos.x >= Interfaz.posicion_x && mousePos.x <= Interfaz.posicion_x + 190 && mousePos.y >= Interfaz.posicion_y && mousePos.y <= Interfaz.posicion_y + 79 ) {

            Clientes.cliente_1.estado = "recorriendo";
            Interfaz.estado = "started";

            //console.log("start");


        }





        //console.log("clicked");
        //console.log(mousePos.x + ',' + mousePos.y);         
    }, false);
    
    //Get Mouse Position
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    //-------

    

    


    


    //renderizacion - Todo dentro se realizarada 60 veces por segundo
    let cooldown = 0;
    let contador = 0;
    // let cooldown_cliente_1 = 0;

    // let Cliente_1 = new Cliente();
    function tiempo() {
        frame(tiempo);
        //******************************************************************************************/
        //console.log(cooldown);
        cooldown = cooldown +1;

        if(cooldown == 60) {
            cooldown = 0;
            contador = contador +1;
            console.log(contador);
        }

        //******************************************************************************************/

        //drawImage tiene 4 parametros: Imagen a ser invocada en la funcion,inicio eje x,inicio eje y, tamaño.widht, tamaño.heigh 
        //dibuja el fondo 
        context.clearRect(0, 0, canvas.width, canvas.heigh);
        context.drawImage(fondo, 0, 0, fondo.naturalWidth, fondo.naturalHeight);  


        //context.drawImage(Spawner.imagen, Spawner.posicion_x, Spawner.posicion_y, Spawner.imagen.naturalWidth, Spawner.imagen.naturalHeight);
        
        
        
        dibujarSpawner(context);
        dibujarEstanteriaSimple(context);
        dibujarEstanteriaDoble(context);
        dibujarVentanilla(context);
        dibujarInterfaz(context);



        //crafting.js
        dibujarCraftingRojo(context);
        dibujarCraftingAmarillo(context);
        dibujarCraftingAzul(context);


        if (Interfaz.estado == "started") {

            dibujarCliente("cliente_1", context);
            recorrido("cliente_1");
    

        }


        //crafter.js
        dibujarCrafter(context);

        //cliente.js
        // Cliente_1.dibujarCliente(context);
      



        if(Clientes.cliente_1.estado == "decidiendo"){

            Clientes.cliente_1.cooldown = 1500;
            Clientes.cliente_1.estado = "espera";

        }

        if (Clientes.cliente_1.cooldown > 0) {
            Clientes.cliente_1.cooldown -= 10;
        }
        
        
        if (Clientes.cliente_1.cooldown <= 0) {

            Clientes.cliente_1.cooldown = 0;
            

            
        }


//ACA
        
        //console.log(getRespawnTime());




        //despues de dibujar se spawnea el cliente en un if

        // spawnearCliente();


    }
    tiempo();




}
