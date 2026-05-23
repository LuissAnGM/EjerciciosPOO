import promptSync from "prompt-sync"
import { Trabajador } from "./Trabajadores.js";

// prompt 
const prompt = promptSync()

let Trabajadores = [];
let opcion ;

do {
    console.log ("\n======Menu=====");
    console.log ("1.Registrar Trabajadores");
    console.log ("2.Mostrar datos")
    console.log ("3.Salir")
    
    opcion = parseInt(prompt("Seleccione una opcion: "))

    switch (opcion){
        case 1:
            try {
                let nombre = prompt ("Ingrese su nombre: ")
                let horas = parseInt(prompt("Ingrese las horas trabajadas: "))
                let pagos = parseInt(prompt("Ingrese el pago: "))
                 
                let trabajador = new Trabajador(nombre,horas,pagos)
            
                trabajador.setNombre = nombre;
                trabajador.setHorasTrabajadas = horas;
                trabajador.setPagoHoras = pagos;
            
                Trabajadores.push (trabajador)
                
                console.log ("\nTrabajador agregado correctamente")
            } catch (error){
                console.log("\nError de mensaje",error.message)
            }
            break;

        case 2:
            if (Trabajadores.length===0){
                console.log("\nAun no hay registros de trabajadores")
            }else{
                    console.log("\n=======Lista de trabajadores=======")
                    Trabajadores.forEach((trabajador,index)=>{
                    console.log(`\nTrabajador ${index+1}`);
                    console.log(`Nombre: `, trabajador.getNombre);
                    console.log(`Horas Trabajadas: `, trabajador.getHorasTrabajadas);
                    console.log(`Pago por hora: `, trabajador.getPagoHora);
                    console.log(`Sueldo bruto: `, trabajador.calcularSueldoBruto());
                    console.log(`Descuento: `, trabajador.calcularDescuento());
                    console.log(`Sueldo final: `, trabajador.calcularSueldoFinal());
                })
            }
            break;

             case 3:
            console.log("\nFin de la ejecución");
            break;
        default:
            console.log("\nOpcion no válida")
    }
}while(opcion!==3)