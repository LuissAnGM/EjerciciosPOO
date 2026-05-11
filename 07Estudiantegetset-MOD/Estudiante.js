export class Estudiante {
    #nombre
    #calificaciones
    constructor(nombre,calificaciones){
        this.#nombre = nombre;
        this.#calificaciones = calificaciones;
    }

    // metodo privado 
   #validarCalificacion(valor){
    if(valor >= 0 && valor <= 100){
        this.#calificaciones = valor;
        if(valor >= 70){
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
        } else {
            console.log("Calificación inválida");
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