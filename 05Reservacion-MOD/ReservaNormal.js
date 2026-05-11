import { RestauranteSagitario } from "./RestauranteSagitario.js";

export class ReservaNormal extends RestauranteSagitario {
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