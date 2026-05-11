import { RestauranteSagitario } from "./RestauranteSagitario.js";
import { ReservaNormal } from "./ReservaNormal.js";
import { ReservaVip } from "./ReservaVip.js";

export class ReservaEvento extends RestauranteSagitario{
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

