class ErrorLibroDisponible extends Error  {
    constructor (message){
        super(message);
        this.name = "ErrorLibroDisponible";
        this.codigo = 404;
    }
}
class materiales {
    constructor (titulo,autor){
        
        if(!titulo){
            throw new ErrorLibroDisponible("No se encontró un título");
        }

        if(!autor || autor.length < 3){
            throw new ErrorLibroDisponible("El nombre del autor debe tener al menos 3 caracteres");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }
    prestado (){
        if (!this.disponible){
            throw new ErrorLibroDisponible("El libro ya está prestado");
        }
        this.disponible = false;
    }
    Presente (){
        if (this.disponible){
            console.log("El libro está disponible");
        } else {
            console.log("El libro no está disponible");
        }
    }
}
class libro extends materiales {
    constructor (titulo,autor,numerosPaginas){
        super(titulo,autor);
        this.numerosPaginas = numerosPaginas; 
    }
}

try {
    const libro1 = new libro("Lospitufos","zzZ",120);
    console.log(`Titulo:${libro1.titulo} Autor:${libro1.autor}`);
    libro1.Presente();
    console.log(libro1);

} 
catch(error){
    console.log("No cumple con los requisitos del material:", error.message);
}