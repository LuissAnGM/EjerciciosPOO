import { RestauranteSagitario } from "./RestauranteSagitario.js";
import { ReservaNormal } from "./ReservaNormal.js";
import { ReservaVip } from "./ReservaVip.js";
import { ReservaEvento } from "./ReservaEvento.js";

let cliente1 = new ReservaNormal ("isai",4,"martes",2,4)
let cliente2 = new ReservaVip ("jehovan",2,"lunes",5,2)
let cliente3 = new ReservaEvento ("miguel",50,"viernes",6,"cumpleanos")

RestauranteSagitario.MostrarDatos(cliente1);
RestauranteSagitario.MostrarDatos(cliente2);
RestauranteSagitario.MostrarDatos(cliente3)

RestauranteSagitario.mesa.map(mesas=>{
    mesas.mostrarReserva()
})