
import { EmpleadoHorasExtra } from "./EmpleadoHorasExtra.js";
try {
    const Empleado1 = new EmpleadoHorasExtra ("",25,"2345WERGD",1000,3,200)
    console.log(Empleado1.mostrarTodo());
}
catch(error){
    console.log("Error:", error.message);
}
