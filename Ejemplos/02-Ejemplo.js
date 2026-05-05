class Persona {
    constructor (nombre, edad, curp){
        this.nombre = nombre; // a este metodo, en el que pasamos los valores a otros parametros
        this.edad = edad;     // se le llama instanciar
        this.curp = curp; 
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} anos `)
    }
} // OBJETO
let Persona1 = new Persona("Luis",18,"GAML070814HTCRNSA3");
Persona1.saludar ();

let Persona2 = new Persona("Isai",18,"CAHI071109HTCRDVSA1");
Persona2.saludar ();

let Persona3 = new Persona("Maria",18,"CAOG070510MTCMRDA9");
Persona3.saludar ();