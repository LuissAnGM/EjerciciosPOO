class Animal { // clase principal
constructor (nombre,edad){
    this.nombre = nombre ;
    this.edad = edad ;
}
    describir (){
        return console.log(`Soy ${this.nombre} y tengo ${this.edad} anos`)
    }
}

class Perro extends Animal{ // Clase hija, heredera de la principal
    ladrar (){
        return "Aullido"
    }
}
let elFirulais = new Perro ("firulais", 1)
elFirulais.describir();
console.log(elFirulais.ladrar());