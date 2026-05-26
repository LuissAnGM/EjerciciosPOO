const prompt=require("prompt-sync")();
class ErrorRestaurante extends Error {
    constructor(message){
        super(message)
        this.name = "ErrorRestaurante"
        this.codigo = 404
    }
}

class Restaurante {
    #HamburguesaSencilla
    #HamburguesaCQueso
    #HamburguesaEspecial
    #PapasFritas
    #Refresco
    #Postre
    #Total
    static menu = [];
    constructor(HamburguesaSencilla = 15,HamburguesaCQueso = 18,HamburguesaEspecial = 20,PapasFritas = 8,Refresco = 5,Postre = 6)
    {
        this.#HamburguesaSencilla = HamburguesaSencilla
        this.#HamburguesaCQueso = HamburguesaCQueso
        this.#HamburguesaEspecial = HamburguesaEspecial
        this.#PapasFritas = PapasFritas
        this.#Refresco = Refresco
        this.#Postre = Postre
        this.#Total = 0
    }

    get getHamburguesaSencilla(){
        return this.#HamburguesaSencilla
    }
    get getHamburguesaCQueso(){
        return this.#HamburguesaCQueso
    }
    get getHamburguesaEspecial(){
        return this.#HamburguesaEspecial
    }
    get getPapasFritas(){
        return this.#PapasFritas
    }
    get getRefresco(){
        return this.#Refresco
    }
    get getPostre(){
        return this.#Postre
    }
    get getTotal(){
        return this.#Total
    }
    set setTotal(total){
        this.#Total = total
    }
    agregarPedido(producto,cantidad){

    const productos = {
        1:{ nombre:"Hamburguesa sencilla",
            precio:this.#HamburguesaSencilla
        },
        2:{ nombre:"Hamburguesa con queso",
            precio:this.#HamburguesaCQueso
        },
        3:{ nombre:"Hamburguesa especial",
            precio:this.#HamburguesaEspecial
        },
        4:{ nombre:"Papas fritas",
            precio:this.#PapasFritas
        },
        5:{ nombre:"Refresco",
            precio:this.#Refresco
        },
        6:{ nombre:"Postre",
            precio:this.#Postre
        }
    }
    if(!productos[producto]){
        throw new ErrorRestaurante("Producto invalido")
    }
    let subtotal =
        productos[producto].precio * cantidad
    this.#Total += subtotal
    Restaurante.menu.push({
        producto: productos[producto].nombre,cantidad,subtotal
    })
}
    mostrarPedidos(){
        if(Restaurante.menu.length === 0){
            console.log("No hay pedidos")
            return
        }
        console.log("Cuenta final: $" + this.#Total)
    }
}
const mesa1 = new Restaurante()
let opcion;
do {
    console.log("\n====== MENU ======");
    console.log("1. Registrar pedidos");
    console.log("2. Mostrar datos");
    console.log("3. Salir");

    opcion = parseInt(prompt("Seleccione una opcion: "))
    switch(opcion){
        case 1:
            try{
                let continuar
                do{
                    console.log("\n===== PRODUCTOS =====")
                    console.log("1. Hamburguesa sencilla ($15)")
                    console.log("2. Hamburguesa con queso ($18)")
                    console.log("3. Hamburguesa especial ($20)")
                    console.log("4. Papas fritas ($8)")
                    console.log("5. Refresco ($5)")
                    console.log("6. Postre ($6)")
                    let producto = parseInt(
                        prompt("Seleccione producto: ")
                    )
                    let cantidad = parseInt(
                        prompt("Cantidad del producto: ")
                    )
                    if(cantidad <= 0 || isNaN(cantidad)){
                        throw new ErrorRestaurante("Cantidad invalida")
                    }
                    mesa1.agregarPedido(producto,cantidad)
                    console.log("Pedido agregado correctamente")
                    continuar = prompt(
                        "Desea agregar otro producto? (si/no): ").toLowerCase()
                }
                while(continuar === "si")
            }catch(error){
                console.log(
                    `${error.name}: ${error.message}`
                )
            }
        break
        case 2:
            mesa1.mostrarPedidos()
        break
        case 3:
            console.log("Fin de la ejecucion")
        break
        default:
            console.log("Opcion invalida")
    }
}while(opcion !== 3)