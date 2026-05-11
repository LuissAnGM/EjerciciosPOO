import { materiales } from "./materiales.js";

export class libro extends materiales {
    constructor (titulo,autor,numerosPaginas){
        super (titulo,autor)
        this.numerosPaginas = numerosPaginas ; 
    }
    infoLibro (){
        console.log (`${this.MostrarInfo()}
        Numerodpaginas ${this.numerosPaginas}`)
    }
}