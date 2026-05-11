export class Vehiculo {
    #velocidad
   constructor(velocidad){
    this.#controlVelocidad(velocidad);
    }

    #controlVelocidad(speed){
        if (speed >=1 && speed <=180 ){
        this.#velocidad = speed;
        } else{
            console.log("Esto no esta permitido")
        }
    }

    get ObtenerVel(){
        return this.#velocidad;
    }

    set newVelocidad(vel){
        return this.#controlVelocidad(vel);
    }

    mostrarInformacion(){
        console.log(`El vehiculo va a una velocidad de ${this.#velocidad} km/h`)
    }
}