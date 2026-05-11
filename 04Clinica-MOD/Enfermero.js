import { PersonalMedico } from "./PersonalMedico.js";
import { Doctor } from "./Doctor.js";

export class Enfermero extends PersonalMedico {
    constructor(Id,nombre,departamento,sueldo,turno,especialidad){
        super (Id,nombre,departamento,sueldo)
        this.turno = turno;
        this.especialidad = especialidad;
    }
    trabajar(){
        this.CuidarPaciente ()
        this.Curacion ()
        this.Asistente ()
    }
    CuidarPaciente(){
        console.log(`El enfermero ${this.nombre} con la id ${this.Id} del departamento ${this.departamento} del turno ${this.turno} esta monitoreando a un paciente`)
    }

    Curacion(){
        console.log(`El enfermero ${this.nombre} esta curando a un paciente gracias a su especialidad en ${this.especialidad}`)
        }
    
    Asistente(){
        console.log(`El enfermero ${this.nombre} esta asistiendo a un doctor, ganando ${this.sueldo}`)
        }
}