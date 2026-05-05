class Estudiante {
    #nombre
    #calificaciones
    constructor(nombre,calificaciones){
        this.#nombre = nombre;
        this.#calificaciones = calificaciones;
    }

    // metodo privado 
    #validarCalificacion(valor){
        if (valor>=70 && valor <=100){
            this.#calificaciones=valor;
        } else{
            console.log(`Reprobado`)
        }
    }

    // Getter
    get obtenerCal(){
        return this.#calificaciones;
    }

    // sobre escrbiendo el valor de calificacion 
    set newCalificacion (cal){
        return this.#validarCalificacion(cal);
    }

    mostrarInformacion (){
        console.log(`El estudiante es ${this.#nombre} y su
        calificacion es ${this.#calificaciones}`)
    }
}

const estudiante1 = new Estudiante("Luis",78)
const estudiante2 = new Estudiante ("pepe",66)

estudiante1.newCalificacion=60;
estudiante1.obtenerCal;
estudiante1.mostrarInformacion();

estudiante2.obtenerCal;
estudiante2.mostrarInformacion();
estudiante2.newCalificacion=90;