class   Personas {
    static clientes=[];
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;

        let datos = {nombre:this.nombre, edad:this.edad}
        Personas.clientes.push(datos)
        
    }

    static obtenerdatos(){
       Personas.clientes.map(dato=>{
            console.log(`su edad es de ${dato.edad} su nombre es de ${dato.nombre}`)
        })
    }
    static buscarcliente (NombreCliente){
        return this.clientes.find(clin=>clin.nombre===NombreCliente)
    }
}
let cliente1 = new Personas("luis",18)
let cliente2 = new Personas("isai",14)
let cliente3 = new Personas("miguel",12)

console.log(Personas.obtenerdatos())

console.log(Personas.buscarcliente("isai"))