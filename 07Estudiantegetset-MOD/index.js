import { Estudiante } from "./Estudiante.js";

const estudiante1 = new Estudiante("Luis",78)
const estudiante2 = new Estudiante ("pepe",66)

estudiante1.newCalificacion = 60;
estudiante1.mostrarInformacion();

estudiante2.newCalificacion = 90;
estudiante2.mostrarInformacion();