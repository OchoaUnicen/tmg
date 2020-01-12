class Cliente {


    constructor() {

        this.nombre = "Cliente",        
        this.posicion_x = this.getPosicion_x(),
        this.posicion_y =  this.getPosicion_y()

    }

    getPosicion_x (){

        return 400;

    }


    getPosicion_y (){

        return 300;
        
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