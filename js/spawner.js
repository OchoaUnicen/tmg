


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


    



    //Math random que de tiempos de entre 10 a 25 segundos
    //donde spawnCliente() se ejecuta
    return "sape";
}


