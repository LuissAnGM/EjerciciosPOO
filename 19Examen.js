class estudiante {
    #nombre
    constructor(nombre){
        this.#nombre = nombre
        if (!nombre){
            throw Error ("El nombre del alumno es invalido")
        }
    }
    mostrarNombre(){
        console.log(`El nombre del estudiante es ${this.#nombre}`)
    }
    get ObtenerName(){
        return this.#nombre;
    }
    set nuevoNombre(name){
         this.#nombre = name
    }
}

const alumno = new estudiante ("Luis")
alumno.nuevoNombre = "Pedro"
alumno.mostrarNombre();