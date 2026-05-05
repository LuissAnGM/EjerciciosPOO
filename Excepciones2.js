class ErrorLibroDisponible extends Error  {
    constructor (message){
        super (message)
        this.titulo = ErrorLibroDisponible
        this.codigo = 404;
    }
}
class materiales {
    constructor (titulo,autor,){
        
        if(!titulo){
            throw new ErrorLibroDisponible ("No se encontro un titulo")
        }
        if(autor.length<3){
            throw new ErrorLibroDisponible ("El nombre del autor debe tener almenos 3 datos")
        }
        this.titulo = titulo ;
        this.autor = autor ;
        this.disponible = true ;
    }
    prestado (){
       if (this.disponible === false)
        throw new ErrorLibroDisponible ("El libro ya esta prestado")
    }
    Presente (){
        if (this.disponible === true)
           console.log("El libro esta disponible")
    }
}
class libro extends materiales {
    constructor (titulo,autor,numerosPaginas){
        super (titulo,autor)
        this.numerosPaginas = numerosPaginas ; 
    }
}

try {
    const libro1 = new libro ("Lospitufos","zzZ",120)

    console.log (`Titulo:${libro1.titulo} Autor:${libro1.autor}`)
    libro1.prestado()
    libro1.Presente()
    console.log(libro1)
}
catch(error){
    console.log("No cumple con los requisitos del material:",error.message)
}


