import { ErrorEmpleado } from "./Error.js";
import { Empleado } from "./Empleado.js";
import { EmpleadoHorasExtra } from "./EmpleadoHorasExtra.js";
try {
    const Empleado1 = new EmpleadoHorasExtra ("Luis",22,"ASDFGRE123",1000,3,100)
    console.log(Empleado1.mostrarTodo());
}
catch(error){
    console.log("Error:", error.message);
}
