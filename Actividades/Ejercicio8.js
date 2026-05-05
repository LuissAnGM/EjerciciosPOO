class Vehiculo {
    #velocidad
    constructor(velocidad){
        this.#velocidad = velocidad;
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

const auto = new Vehiculo (190);
auto.newVelocidad=200;
auto.ObtenerVel;
auto.mostrarInformacion();