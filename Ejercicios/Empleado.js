import { ErrorEmpleado } from "./Error.js";

export class Empleado {
    #nombre;
    #TiempoDvida;
    #rfc;
    #sueldoBase;

    constructor(nombre,TiempoDvida,rfc=null,sueldoBase){
        this.nombre = nombre;
        this.TiempoDvida = TiempoDvida;
        this.rfc = rfc;
        this.sueldoBase = sueldoBase;
    }

    get nombre(){ return this.#nombre; }
    get TiempoDvida(){ return this.#TiempoDvida; }
    get rfc(){ return this.#rfc; }
    get sueldoBase(){ return this.#sueldoBase; }

    set nombre(valor){
        if(!valor){
            throw new ErrorEmpleado("El nombre no puede estar vacio");
        }
        this.#nombre = valor;
    }

    set TiempoDvida(valor){
        if(!valor){
            throw new ErrorEmpleado("La edad no puede estar vacia");
        }
        this.#TiempoDvida = valor;
    }

    set rfc(valor){
        this.#rfc = valor;
    }

    set sueldoBase(valor){
        if(!valor){
            throw new ErrorEmpleado("El sueldo no puede estar vacio");
        }
        this.#sueldoBase = valor;
    }

    CalculoSueldoBruto(){
        return this.#sueldoBase;
    }

    CalculoSueldoNeto(){
        return this.CalculoSueldoBruto() * 0.9;
    }

    mostrar(){
        return `
        Informacion Basica del Empleado
        Nombre: ${this.#nombre}
        Edad: ${this.#TiempoDvida}
        RFC: ${this.#rfc}`;
    }
}