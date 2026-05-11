/*Una biblioteca necesita registrar distintos tipos de materiales como libros y
revistas.Todos los materiales tiene caracteristicas en comun como titulo y autor
pero tambien poseen caracteristicaas especificas */
export let biblioteca = [];
export class materiales {
    constructor (titulo,autor,){
        this.titulo = titulo ;
        this.autor = autor ;
        this.disponible = true ;
    }
    MostrarInfo (){
    console.log (`Titulo:${this.titulo} Autor:${this.autor}`) 
    }
    prestar (){
       return this.disponible
       ?(this.disponible = false, "Prestado") : "No esta disponible"
    }
    devolver (){
       return !this.disponible 
       ?(this.disponible=true ,"Devuelto") : "ya esta disponible"
    }
}