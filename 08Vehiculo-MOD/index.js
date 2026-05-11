import { Vehiculo } from "./Vehiculo.js";

const auto = new Vehiculo (120);
auto.newVelocidad=60;
console.log(auto.ObtenerVel);
auto.mostrarInformacion();