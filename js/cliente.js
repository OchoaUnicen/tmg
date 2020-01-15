let imagen_cliente = new Image();
imagen_cliente.src = "./img/cliente.png";


let Clientes = {

    "cliente_1": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y  
      },
    "cliente_2": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y    
    },
    "cliente_3": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y   
     },
    "cliente_4": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y   
     },
    "cliente_5": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y   
     },
    "cliente_6": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y   
     },
    "cliente_7": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y   
     },
    "cliente_8": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y":Spawner.posicion_y
    },
    "cliente_9": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y":Spawner.posicion_y
    },
    "cliente_10": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y":Spawner.posicion_y
    }







}


function dibujarCliente(cliente, context){

    switch(cliente) {

        case "cliente_1":
        context.drawImage(Clientes.cliente_1.imagen, Clientes.cliente_1.posicion_x, Clientes.cliente_1.posicion_y, Clientes.cliente_1.imagen.naturalWidth, Clientes.cliente_1.imagen.naturalHeight);

    }
    
}









































// class Cliente {
//     constructor() {
//         this.nombre = "Cliente",        
//         this.posicion_x = this.getPosicion_x(),
//         this.posicion_y =  this.getPosicion_y(),
//         this.imagen = this.getImagen()
//     }

//     getImagen(){
//         var imagen_cliente = new Image();
//         imagen_cliente.src = "./img/cliente.png";
//         return imagen_cliente;
//     }

//     getPosicion_x (){
//         return 400;
//     }


//     getPosicion_y (){
//         return 300;        
//     }


//     dibujarCliente(context) {
//         console.log("entro dibujarCliente");
//         context.drawImage(this.imagen, this.posicion_x, this.posicion_y, this.imagen.naturalWidth, this.imagen.naturalHeight);
//     }



    
//     getCantRecorridos(){       
//         let maximos_recorridos = 4;
//         let minimos_recorridos = 1;
//         let cantidad = Math.floor(Math.random() * (maximos_recorridos - minimos_recorridos) + minimos_recorridos);    
//         return cantidad;
//     }



//     elegirProducto() {

//         let maximo = 2;
//         let minimo = 0;
//         let cantidad = Math.floor(Math.random() * (maximo - minimo) + minimo); 
//     //falta terminar esta func
//     }





    





// }