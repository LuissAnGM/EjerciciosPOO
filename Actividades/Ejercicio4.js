class PersonalMedico {
    static miembro=[];
    constructor(Id,nombre,departamento,sueldo){
        this.Id = Id;
        this.nombre = nombre;
        this.departamento = departamento;
        this.sueldo = sueldo;
    }
    static registro (objeto){
        PersonalMedico.miembro.push(objeto)
    }
    trabajar(){
        console.log(`El personal medico esta trabajando:`)
    }
}
class Doctor extends PersonalMedico {
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
class Enfermero extends PersonalMedico {
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

let miembro1 = new Doctor (1243,"Jose","quirurgico",12000,"Oftalmología","Especialista")
let miembro2 = new Enfermero (4321,"Paola","atencion",6000,"matutino","quirurgica")

PersonalMedico.registro(miembro1)
PersonalMedico.registro(miembro2)

PersonalMedico.miembro.map(persona => {
   persona.trabajar()});