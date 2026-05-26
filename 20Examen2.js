class Restaurante{

    #total = 0

    static menu = {
        sencilla:15,
        queso:18,
        especial:20,
        papas:8,
        refresco:5,
        postre:6
    }

    agregar(producto,cantidad){

        if(!Restaurante.menu[producto]){
            throw Error("Producto invalido")
        }

        this.#total +=
            Restaurante.menu[producto] * cantidad
    }

    mostrarCuenta(){
        console.log(
            "Cuenta final: $" + this.#total
        )
    }
}

try{
const mesa1 = new Restaurante()

mesa1.agregar("queso",2)
mesa1.agregar("papas",1)
mesa1.agregar("refresco",2)
mesa1.mostrarCuenta()

const mesa2 = new Restaurante()

mesa2.agregar("sencilla",2)
mesa2.agregar("refresco",1)
mesa2.agregar("postre",2)
mesa2.mostrarCuenta()

const mesa3 = new Restaurante()

mesa3.agregar("especial",3)
mesa3.agregar("refresco",1)
mesa3.agregar("postre",3)
mesa3.mostrarCuenta()
}catch(error){

    console.log(error.message)
}
