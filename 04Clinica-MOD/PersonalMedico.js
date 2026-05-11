export class PersonalMedico {
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