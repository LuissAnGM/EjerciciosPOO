class ErrorEmpleado extends Error{
    constructor (message){
        super(message)
        this.name = "ErrorEmpleado"
        this.codigo = 404;
    }
}
class Empleado {
    #nombre;
    #TiempoDvida;
    #rfc;
    #sueldoBase;

    constructor(nombre,TiempoDvida,rfc=null,sueldoBase){
        if(!nombre){
            throw new ErrorEmpleado ("El nombre no puede estar vacio")
        }
        if(!TiempoDvida){
            throw new ErrorEmpleado ("La edad no puede estar vacia")
        }
        this.#nombre = nombre;
        this.#TiempoDvida = TiempoDvida;
        this.#rfc = rfc;
        this.#sueldoBase = sueldoBase;
    }
    get nombre(){
        return this.#nombre;
    }
    get TiempoDvida(){
        return this.#TiempoDvida;
    }
    get rfc(){
        return this.#rfc;
    }
    get sueldoBase(){
        return this.#sueldoBase;
    }

    set nombre (valor){
        if(!valor){
            throw new ErrorEmpleado("El nombre no puede estar vacio")
        }
        this.#nombre = valor;
    }
    set TiempoDvida(valor){
        if(!valor){
            throw new ErrorEmpleado ("La edad no puede estar vacia")
        }
        this.#TiempoDvida = valor;
    }
    set rfc(valor){
        return this.#rfc = valor;
        this.#rfc = valor;
    }
    set sueldoBase(valor){
        if (!valor){
            throw new ErrorEmpleado ("El valor del sueldo no puede estar vacio")
        }
        this.#sueldoBase = valor;
    }
    CalculoSueldoBruto(){
        return this.#sueldoBase
    }
    CalculoSueldoNeto(){
        return this.CalculoSueldoBruto() * 0.9;
    }
    mostrar (){
        return `
        Informacion Basica del Empleado
        Nombre:${this.#nombre}
        Edad:${this.#TiempoDvida}
        RFC:${this.#rfc}`
    }
}
class EmpleadoHorasExtra extends Empleado {
    #horasExtra;
    #pagoHora;

    constructor(nombre,TiempoDvida,rfc,sueldoBase,horasExtra,pagoHora){
    super(nombre,TiempoDvida,rfc,sueldoBase);

    if(!horasExtra){
        throw new ErrorEmpleado ("No hay datos dentro de las horasExtra")
    }
    if (!pagoHora){
        throw new ErrorEmpleado ("No hay datos dentro del pago")
    }
    this.#horasExtra = horasExtra;
    this.#pagoHora = pagoHora;
    }
    get horasExtra(){
        return this.#horasExtra;
    }
    get pagoHora(){
        return this.#pagoHora;
    }
    set pagoHora(valor){
        if(!valor){
            throw new ErrorEmpleado ("El pago no puede estar vacio")
        }
        this.#pagoHora = valor;
    }
    set horasExtra(valor){
        if(!valor){
            throw new ErrorEmpleado ("El tiempo de horas extra no puede estar vacio")
        }
        this.#horasExtra = valor;
    }
    calcularHorasExtra(){
        return this.#horasExtra * this.#pagoHora;
    }
    CalculoSueldoBruto(){
        return this.sueldoBase + this.calcularHorasExtra()
    }
    mostrarTodo(){
        return `
        ${this.mostrar()}
        Informacion Complementaria del Empleado
        SueldoBase:${this.sueldoBase}
        HorasExtra:${this.#horasExtra}
        PagoPorHora:${this.#pagoHora}
        ComplementoExtra:${this.calcularHorasExtra()}
        SueldoBruto:${this.CalculoSueldoBruto()}
        SueldoNeto:${this.CalculoSueldoNeto()}`
    }
}

try {
const Empleado1 = new EmpleadoHorasExtra ("Luis",25,"12AWERS34",1000,4,1000)
Empleado1.nombre = "Juan"
Empleado1.TiempoDvida = 18
Empleado1.rfc = "12SDFV"
Empleado1.sueldoBase = 400
Empleado1.horasExtra =2
Empleado1.pagoHora = 100
console.log(Empleado1.mostrarTodo());
}
catch(error){
    console.log("No se cumple con el requisito solicitado:",error.message)
}