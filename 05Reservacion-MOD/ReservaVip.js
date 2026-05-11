import { RestauranteSagitario } from "./RestauranteSagitario.js";
import { ReservaNormal } from "./ReservaNormal.js";

export class ReservaVip extends RestauranteSagitario {
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