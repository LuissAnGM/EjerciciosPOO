export class ErrorEmpleado extends Error {
    constructor(message){
        super(message);
        this.name ="ErrorEmpleado"
        this.codigo = 404;
    }
}