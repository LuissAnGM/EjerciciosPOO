class Persona {
    constructor (nombre,apellido,curp){
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.curp = curp ;
    }
    mostrarInformacion (){
        return (`Nombre: ${this.nombre} Apellido: ${this.apellido}
            Curp: ${this.curp}`)
    }
}
class estudiante extends Persona {
    constructor (nombre,apellido,curp,carrera,matricula,semestre){
        super (nombre,apellido,curp) ;
        this.carrera = carrera ;
        this.matricula = matricula ; 
        this.semestre = semestre ;
    }

    infoEstudiante (){
        console.log (`${this.mostrarInformacion()}
        Carrera: ${this.carrera}, Semestre: ${this.semestre} y su Matricula: ${this.matricula}`)
    }
}
class Docente extends Persona {
    constructor (nombre,apellido,curp,Puesto,Clave,Departamento){
        super (nombre,apellido,curp)
        this.Puesto = Puesto ;
        this.Clave = Clave ; 
        this.Departamento = Departamento ;
    }
    infoDocente (){
        console.log (`${this.mostrarInformacion()}
        Puesto: ${this.Puesto} Clave: ${this.Clave} Departamento: ${this.Departamento}`)
    }
}
let Persona1= new estudiante ("Luis","Garcia","GAML014HTCRNSA3","Sistemas","25E20057",2)
let Persona2 = new Docente ("Dany","Cambrano","KASDJASFJ","Docente","22334E","Ac.Sistemas")
Persona1.infoEstudiante();
Persona2.infoDocente();