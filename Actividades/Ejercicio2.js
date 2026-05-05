/*Una biblioteca necesita registrar distintos tipos de materiales como libros y
revistas.Todos los materiales tiene caracteristicas en comun como titulo y autor
pero tambien poseen caracteristicaas especificas */
let biblioteca = [];
class materiales {
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
class libro extends materiales {
    constructor (titulo,autor,numerosPaginas){
        super (titulo,autor)
        this.numerosPaginas = numerosPaginas ; 
    }
    infoLibro (){
        console.log (`${this.MostrarInfo()}
        Numerodpaginas ${this.numerosPaginas}`)
    }
}
class revista extends materiales {
    constructor (titulo,autor,edicion){
        super (titulo,autor)
        this.edicion = edicion ;
    }
    infoRevista (){
        console.log (`${this.MostrarInfo()}
        Edicion:${this.edicion}`)
    }
}
let libro1 = new libro ("El principito","Antoine de Saint",120)
let revista1 = new revista ("Mecanica","varios",10)

biblioteca.push(libro1);
biblioteca.push(revista1);
biblioteca.map(libreria=>(libreria.MostrarInfo())) 

console.log(biblioteca);