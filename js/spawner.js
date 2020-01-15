


let imagen_spawner = new Image();
imagen_spawner.src = "./img/puerta_clientes.png";


let Spawner = {

    "estado": "inactivo",
    "limite_clientes_simultaneos": 5,
    "imagen": imagen_spawner,
    "posicion_x": 810,
    "posicion_y": 80,
    "respawn_time": getRespawnTime()

}


function dibujarSpawner(context){

    context.drawImage(imagen_spawner, Spawner.posicion_x, Spawner.posicion_y, imagen_spawner.naturalWidth, imagen_spawner.naturalHeight);


}



function getRespawnTime() {


    let maximo_timer = 10;
    let minimo_timer = 1;
    let timer_respawn = Math.floor(Math.random() * (maximo_timer - minimo_timer) + minimo_timer); 

    //Math random que de tiempos de entre 10 a 25 segundos
    //donde spawnCliente() se ejecuta
    return timer_respawn;
}





