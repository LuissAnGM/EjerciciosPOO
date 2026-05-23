export class Trabajador{
    // encapsulamiento
    #nombre
    #horasTrabajadas
    #pagoHora

    constructor(nombre,horasTrabajadas,pagoHora){
        this.#nombre = nombre;
        this.#horasTrabajadas = horasTrabajadas;
        this.#pagoHora = pagoHora;
    }

    // getters
    get getNombre (){
        return this.#nombre
    }
    
    get getHorasTrabajadas(){
        return this.#horasTrabajadas
    }

    get getPagoHora (){
        return this.#pagoHora
    }
    
    //Uso de setters
    set setNombre(nombre){
        if (nombre.trim()===""){
            throw new Error ("El nombre no puede estar vacio")
        }
        this.#nombre
    }
    set setHorasTrabajadas(horas){
        if (horas<=0 || isNaN(horas)){
            throw new Error ("Las horas trabajadas deben ser mayor a cero")
        }
        this.#horasTrabajadas
    }
    set setPagoHoras(pago){
        if (pago<=0 || isNaN(pago)){
            throw new Error ("El pago por hora deben ser mayor a cero")
        }
        this.#pagoHora
    }

// Metodos para calcular el sueldos
    calcularSueldoBruto(){
    return this.#horasTrabajadas * this.#pagoHora
    }

    calcularDescuento (){
        return this.calcularSueldoBruto() * 0.10
    }

    calcularSueldoFinal (){
        return this.calcularSueldoBruto() - this.calcularDescuento()
    }
}