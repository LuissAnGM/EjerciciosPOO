/*Elaboral un programa utilizando clases en JS que permita ingresar informacion de un estudiante
y actualizar su promedio, si el promedio es mayor o igual a 70 que se muestre el mensaje aprobado*/
class Estudiante {
    constructor (nombre,matricula,promedio){
        this.nombre = nombre;
        this.matricula = matricula;
        this.promedio = promedio; 
    }
    mostrarinfo (){
        console.log (`El nombre del estudiante es ${this.nombre} su matricula es ${this.matricula}`)
    }
    Calif (actp){
        return this.Calif=actp
    }
    aprorepro (){
        if (this.promedio>=70){
            console.log (`El promedio del alumno es de ${this.promedio} entonces es aprobado`)
        }
        else {
            console.log(`El promedio del alumno es de ${this.promedio} entonces esta reprobado`)
        }
    }
}
 let alumno1 = new Estudiante ("Luis","25E20027",90)
 alumno1.mostrarinfo ();
 alumno1.Calif (60);
 alumno1.aprorepro ();