import { PersonalMedico, } from "./PersonalMedico.js"
import { Doctor } from "./Doctor.js"
import { Enfermero } from "./Enfermero.js"

let miembro1 = new Doctor (1243,"Jose","quirurgico",12000,"Oftalmología","Especialista")
let miembro2 = new Enfermero (4321,"Paola","atencion",6000,"matutino","quirurgica")

PersonalMedico.registro(miembro1)
PersonalMedico.registro(miembro2)

PersonalMedico.miembro.map(persona => {
   persona.trabajar()});