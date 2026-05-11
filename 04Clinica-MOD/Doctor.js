import { PersonalMedico } from "./PersonalMedico.js";

export class Doctor extends PersonalMedico {
    constructor (Id,nombre,departamento,sueldo,especialidad,cargo){
        super (Id,nombre,departamento,sueldo)
        this.especialidad = especialidad;
        this.cargo = cargo;
    }
    trabajar(){
        this.Diagnostico()
        this.Cirugia ()
        this.Alta ()
    }

    Diagnostico(){
        console.log(`El doctor ${this.nombre} con la id ${this.Id} del departamento ${this.departamento} esta diagnosticando a su paciente`)
    }

    Cirugia(){
        console.log (`El doctor ${this.nombre} entro a cirugia`)
    }

    Alta(){
        console.log (`El doctor ${this.nombre} dio de alta a su paciente ganando ${this.sueldo}`)
    }
}