import { ErrorInst } from "./ErrorReporte.js"
import { Curso } from "./Curso.js"
import promptSync from "prompt-sync"
const prompt = promptSync()
try {
    let limite = parseInt(prompt("¿Cuántas personas ingresarás?: "))
    if (limite <= 0 || isNaN(limite)) {
        throw new ErrorInst("Cantidad inválida")
     }

    for (let i = 0; i < limite; i++) {
        console.log(`\nParticipante ${i + 1}`)
        let nombre = prompt("Ingrese su nombre: ")
        let old = parseInt(prompt("Ingrese su edad: "))
        let altura = parseFloat(prompt("Ingrese su altura en metros: "))
        let sexo = prompt("Ingrese su sexo (F/M): ").toUpperCase()
        new Curso(nombre, old, altura, sexo)
    }
    Curso.mostrarResultados()
} catch (error) {
    console.log("\nNo se cumple con el requisito solicitado")
    console.log(error.message)
}   