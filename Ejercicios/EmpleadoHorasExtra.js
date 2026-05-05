import { Empleado } from "./Empleado.js";
import { ErrorEmpleado } from "./Error.js";

export class EmpleadoHorasExtra extends Empleado{
    #horasExtra;
    #pagoHora;

    constructor(nombre,TiempoDvida,rfc,sueldoBase,horasExtra,pagoHora){
        super(nombre,TiempoDvida,rfc,sueldoBase);

        this.horasExtra = horasExtra;
        this.pagoHora = pagoHora;
    }

    get horasExtra(){ return this.#horasExtra; }
    get pagoHora(){ return this.#pagoHora; }

    set horasExtra(valor){
        if(!valor){
            throw new ErrorEmpleado("Horas extra inválidas");
        }
        this.#horasExtra = valor;
    }

    set pagoHora(valor){
        if(!valor){
            throw new ErrorEmpleado("Pago por hora inválido");
        }
        this.#pagoHora = valor;
    }

    calcularHorasExtra(){
        return this.#horasExtra * this.#pagoHora;
    }

    CalculoSueldoBruto(){
        return this.sueldoBase + this.calcularHorasExtra();
    }

    mostrarTodo(){
        return `
        ${this.mostrar()}
        Sueldo Base: ${this.sueldoBase}
        Horas Extra: ${this.#horasExtra}
        Pago por Hora: ${this.#pagoHora}
        Total Extra: ${this.calcularHorasExtra()}
        Sueldo Bruto: ${this.CalculoSueldoBruto()}
        Sueldo Neto: ${this.CalculoSueldoNeto()}
        `;
    }
}