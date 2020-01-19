let imagen_cliente = new Image();
imagen_cliente.src = "./img/cliente.png";


let Clientes = {

    "cliente_1": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y ,
        "estado": "off",
        //estados : off, recorriendo, decidiendo, yendoventanilla, enventanilla, saliendo
        "cant_recorridos": getCantRecorridos(),
        "cooldown": 0,
        "productos" : {

                "producto_1": elegirProducto(),
                "producto_2": "decidiendo",
                "producto_3": "decidiendo"
        }
      },
    "cliente_2": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y ,
        "estado": "libre"  ,
        "cant_recorridos": getCantRecorridos() 
    },
    "cliente_3": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y  ,
        "estado": "libre" ,
        "cant_recorridos": getCantRecorridos()
     },
    "cliente_4": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y  ,
        "estado": "libre" ,
        "cant_recorridos": getCantRecorridos()
     },
    "cliente_5": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y  ,
        "estado": "libre" ,
        "cant_recorridos": getCantRecorridos()
     },
    "cliente_6": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y  ,
        "estado": "libre" ,
        "cant_recorridos": getCantRecorridos()
     },
    "cliente_7": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y": Spawner.posicion_y  ,
        "estado": "libre" ,
        "cant_recorridos": getCantRecorridos()
     },
    "cliente_8": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y":Spawner.posicion_y,
        "estado": "libre",
        "cant_recorridos": getCantRecorridos()
    },
    "cliente_9": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y":Spawner.posicion_y,
        "estado": "libre",
        "cant_recorridos": getCantRecorridos()
    },
    "cliente_10": {
        "imagen": imagen_cliente ,
        "posicion_x": Spawner.posicion_x ,
        "posicion_y":Spawner.posicion_y,
        "estado": "libre",
        "cant_recorridos": getCantRecorridos()
    }







}


function dibujarCliente(cliente, context){

    switch(cliente) {

        case "cliente_1":
        context.drawImage(Clientes.cliente_1.imagen, Clientes.cliente_1.posicion_x, Clientes.cliente_1.posicion_y, Clientes.cliente_1.imagen.naturalWidth, Clientes.cliente_1.imagen.naturalHeight);
        break;
    }
    
}




function recorrido(cliente) {

    switch(cliente) {

        case "cliente_1":
            


        if (Clientes.cliente_1. estado == "recorriendo" && 
            (Clientes.cliente_1.productos.producto_1 == "spot_azul")) {

                if (Clientes.cliente_1.posicion_x > Estanteria_simple.posicion_x + 100) {


                    Clientes.cliente_1.posicion_x -= 5;
                }

                if (Clientes.cliente_1.posicion_x < Estanteria_simple.posicion_x + 100) {


                    Clientes.cliente_1.posicion_x += 5;
                }




                if(Clientes.cliente_1.posicion_y < Estanteria_simple.posicion_y) {

                    Clientes.cliente_1.posicion_y += 5;
                    // console.log("cliente_1 pos x: " + Clientes.cliente_1.posicion_x);
                    // console.log("cliente_1 pos y:" + Clientes.cliente_1.posicion_y);
                }

                if (Clientes.cliente_1.posicion_y > Estanteria_simple.posicion_y) {

                    Clientes.cliente_1.posicion_y -= 5;

                    
                }

                









        }

        //********************************************/
            if (Clientes.cliente_1.estado == "recorriendo" &&
             (Clientes.cliente_1.productos.producto_1 == "spot_rojo" || Clientes.cliente_1.productos.producto_1 == "spot_amarillo")){



                if (Clientes.cliente_1.posicion_x > Estanteria_doble.posicion_x + 100) {


                    Clientes.cliente_1.posicion_x -= 5;
                }

                if (Clientes.cliente_1.posicion_x < Estanteria_doble.posicion_x + 100) {


                    Clientes.cliente_1.posicion_x += 5;
                }


                if(Clientes.cliente_1.posicion_y < Estanteria_doble.posicion_y) {

                    Clientes.cliente_1.posicion_y += 5;
                    // console.log("cliente_1 pos x: " + Clientes.cliente_1.posicion_x);
                    // console.log("cliente_1 pos y:" + Clientes.cliente_1.posicion_y);
                }

                if (Clientes.cliente_1.posicion_y > Estanteria_doble.posicion_y) {

                    Clientes.cliente_1.posicion_y -= 5;

                    
                }

                


                
            }




        //********************************************/

            // if(Clientes.cliente_1.estado == "recorriendo" && Clientes.cliente_1.posicion_x > Estanteria_doble.posicion_x + 100) {
            //     Clientes.cliente_1.posicion_x -= 5;
            // }


            // if (Clientes.cliente_1.estado == "recorriendo" && Clientes.cliente_1.posicion_x <= Estanteria_doble.posicion_x + 100) {
            //     if(Clientes.cliente_1.posicion_y < Estanteria_doble.posicion_y) {

            //         Clientes.cliente_1.posicion_y += 5;
            //         console.log("cliente_1 pos x: " + Clientes.cliente_1.posicion_x);
            //         console.log("cliente_1 pos y:" + Clientes.cliente_1.posicion_y);
            //     }
                

            // }

            //aca jimmy
            if (Clientes.cliente_1.posicion_x == 500 && Clientes.cliente_1.posicion_y == 360 && Clientes.cliente_1.estado == "recorriendo") {
                
                Clientes.cliente_1.estado = "decidiendo";

                // if (elegirProducto() == 1){
                //     Clientes.cliente_1.productos.producto_1 = "spot_rojo";
                // }
                // if (elegirProducto() == 2){
                //     Clientes.cliente_1.productos.producto_1 = "spot_amarillo";
                // }     
                // console.log("decidiendo");
                // console.log("elegirProducto() // cliente_1.productos.producto_1  "+ Clientes.cliente_1.productos.producto_1);



            }
            

            //retomar aca --
            if (Clientes.cliente_1.estado == "decidiendo") {
                let desicion = tomarDecision();
                if (desicion == true) {

                    //agregar a arreglo de productos a comprar
                    if (Clientes.cliente_1.cant_recorridos > 0 && Clientes.cliente_1.cooldown == 0) {


                    }
                }

                else if (desicion == false) {
                    

                }


            }


            //falta parametro de cantidad de productos a comprar > 0
            if (Clientes.cliente_1.cant_recorridos == 0 && Clientes.cliente_1.cooldown == 0) {

                
                if (Clientes.cliente_1.posicion_y > Ventanilla.posicion_y) {

                    Clientes.cliente_1.posicion_y -= 5;
                    // console.log("posicion x cliente : " + Clientes.cliente_1.posicion_x );
                    // console.log("posicion y cliente : " + Clientes.cliente_1.posicion_y);                        
                }

                else if (Clientes.cliente_1.posicion_y < Ventanilla.posicion_y) {

                    Clientes.cliente_1.posicion_y +=5;

                }


                if (Clientes.cliente_1.posicion_x > Ventanilla.posicion_x + 100) {

                    Clientes.cliente_1.posicion_x -= 5;

                }

                else if (Clientes.cliente_1.posicion_x < Ventanilla.posicion_x + 100) {
                    Clientes.cliente_1.posicion_x += 5;

                }


            }

            // if (Clientes.cliente_1.productos.producto_1 !== "decidiendo" && Clientes.cliente_1.cooldown == 0) {
            //     console.log("entrop");

            //         if (Clientes.cliente_1.posicion_y > Ventanilla.posicion_y) {

            //             Clientes.cliente_1.posicion_y -= 5;
            //             // console.log("posicion x cliente : " + Clientes.cliente_1.posicion_x );
            //             // console.log("posicion y cliente : " + Clientes.cliente_1.posicion_y);                        
            //         }

            //         else if (Clientes.cliente_1.posicion_y < Ventanilla.posicion_y) {

            //             Clientes.cliente_1.posicion_y +=5;

            //         }


            //         if (Clientes.cliente_1.posicion_x > Ventanilla.posicion_x + 100) {

            //             Clientes.cliente_1.posicion_x -= 5;

            //         }

            //         else if (Clientes.cliente_1.posicion_x < Ventanilla.posicion_x + 100) {
            //             Clientes.cliente_1.posicion_x += 5;

            //         }



            // }
        break;

    }



}


  function  getCantRecorridos(){       
        let maximos_recorridos = 4;
        let minimos_recorridos = 1;
        let cantidad = Math.floor(Math.random() * (maximos_recorridos - minimos_recorridos) + minimos_recorridos);    
        return cantidad;
    }



    function tomarDecision() {
        let maximos_recorridos = 3;
        let minimos_recorridos = 1;
        let cantidad = Math.floor(Math.random() * (maximos_recorridos - minimos_recorridos) + minimos_recorridos); 
        let compra;
        if(cantidad == 1) {

            compra = true;

        }

        if (cantidad == 2 || cantidad == 3) {


            compra = false;
        }
        
        
        return compra;


    }

    function elegirProducto() {

        //el maximo tiene que ser 3
        let maximo_productos = 4;
        let minimo_productos = 1;
        let eleccion_producto = Math.floor(Math.random() * (maximo_productos - minimo_productos) + minimo_productos); 



    if (eleccion_producto == 1) {
                return "spot_rojo";

            }

            if (eleccion_producto == 2) {
                return "spot_amarillo"

            }


            else {

                return "spot_azul"
            }


       // return eleccion_producto;


        
    //falta terminar esta func
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