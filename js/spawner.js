


let imagen_spawner = new Image();
imagen_spawner.src = "./img/puerta_clientes.png";


let Spawner = {

    "limite_clientes_simultaneos": 5,
    "imagen": imagen_spawner,
    "posicion_x": 40,
    "posicion_y": 80,
    "respawn_time": getRespawnTime()

}



function getRespawnTime() {


    



    //Math random que de tiempos de entre 10 a 25 segundos
    //donde spawnCliente() se ejecuta
    return "sape";
}


