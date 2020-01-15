class Cliente {


    constructor() {

        this.nombre = "Cliente",        
        this.posicion_x = this.getPosicion_x(),
        this.posicion_y =  this.getPosicion_y(),
        this.imagen = this.getImagen()

    }


    getImagen(){

        var imagen_cliente = new Image();
        imagen_cliente.src = "./img/cliente.png";

        return imagen_cliente;

    }

    getPosicion_x (){

        return 400;

    }


    getPosicion_y (){

        return 300;
        
    }


    dibujarCliente(context) {

        context.drawImage(this.imagen, this.posicion_x, this.posicion_y, this.imagen.naturalWidth, this.imagen.naturalHeight);


    }



    
    getCantRecorridos(){       
        let maximos_recorridos = 4;
        let minimos_recorridos = 1;
        let cantidad = Math.floor(Math.random() * (maximos_recorridos - minimos_recorridos) + minimos_recorridos);     

        return cantidad;
    }



    elegirProducto() {

        let maximo = 2;
        let minimo = 0;
        let cantidad = Math.floor(Math.random() * (maximo - minimo) + minimo); 
    //falta terminar esta func
    }


    





}