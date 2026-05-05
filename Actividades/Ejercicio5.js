class RestauranteSagitario{
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
class ReservaNormal extends RestauranteSagitario {
    constructor (nombrecliente,numeropersonas,fecha,hora,cantidadmenus){
        super(nombrecliente,numeropersonas,fecha,hora)
        this.cantidadmenus = cantidadmenus;
    }
    llevarmesa(){
        console.log(`se a reservado una mesa normal para ${this.nombrecliente} siendo para ${this.numeropersonas} personas en el dia ${this.fecha} a las ${this.hora} llevando ${this.cantidadmenus} menus`)
    }
    mostrarReserva(){
        this.llevarmesa()
    }
}
class ReservaVip extends RestauranteSagitario {
    constructor(nombrecliente,numeropersonas,fecha,hora,postres){
        super(nombrecliente,numeropersonas,fecha,hora)
        this.postres = postres;
    }
    mesapreferencial (){
        console.log (`se reservo una mesa preferencial para ${this.nombrecliente} siendo para ${this.numeropersonas} personas en el dia ${this.fecha} a las ${this.hora} llevando ${this.postres} postres`)
    }
    mostrarReserva(){
        this.mesapreferencial()
    }
}
class ReservaEvento extends RestauranteSagitario{
    constructor (nombrecliente,numeropersonas,fecha,hora,tipodevento){
        super(nombrecliente,numeropersonas,fecha,hora)
        this.tipodevento = tipodevento;
    }
    organizareserva(){
        console.log(`se reservo el lugar para ${this.nombrecliente} siendo para ${this.numeropersonas} personas en el dia ${this.fecha} a las ${this.hora} para un evento de ${this.tipodevento}`)
    }
    mostrarReserva(){
        this.organizareserva()
    }
}
let cliente1 = new ReservaNormal ("isai",4,"martes",2,4)
let cliente2 = new ReservaVip ("jehovan",2,"lunes",5,2)
let cliente3 = new ReservaEvento ("miguel",50,"viernes",6,"cumpleanos")

RestauranteSagitario.MostrarDatos(cliente1);
RestauranteSagitario.MostrarDatos(cliente2);
RestauranteSagitario.MostrarDatos(cliente3)

RestauranteSagitario.mesa.map(mesas=>{
    mesas.mostrarReserva()
})