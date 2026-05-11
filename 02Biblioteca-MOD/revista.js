import { materiales } from "./materiales.js";
import { libro } from "./libro.js";

export class revista extends materiales {
    constructor (titulo,autor,edicion){
        super (titulo,autor)
        this.edicion = edicion ;
    }
    infoRevista (){
        console.log (`${this.MostrarInfo()}
        Edicion:${this.edicion}`)
    }
}