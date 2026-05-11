import { materiales,biblioteca } from "./materiales.js";
import { libro } from "./libro.js";
import { revista } from "./revista.js";

let libro1 = new libro ("El principito","Antoine de Saint",120)
let revista1 = new revista ("Mecanica","varios",10)

biblioteca.push(libro1);
biblioteca.push(revista1);
biblioteca.map(libreria=>(libreria.MostrarInfo())) 

console.log(biblioteca);