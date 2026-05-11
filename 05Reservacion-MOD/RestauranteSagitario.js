export class RestauranteSagitario{
    static mesa = [];
    constructor(nombrecliente,numeropersonas,fecha,hora){
        this.nombrecliente = nombrecliente;
        this.numeropersonas = numeropersonas;
        this.fecha = fecha;
        this.hora = hora;
    }
    static MostrarDatos (reserva){
        RestauranteSagitario.mesa.push(reserva)
    }
    mostrarReserva(){
        console.log(`reserva registrada`)
    }
}