/*Calcular el area y perimetro de un rectangulo utilizando las clases de js
otra manera de declarar clases es con let Personas = class {*/
class Rectangulo {
    constructor (base,altura){
        this.base = base;
        this.altura = altura;
    }
    area (){
       return this.base*this.altura
    }
    perimetro (){
        return (2*this.altura)+(2*this.base);
    }
    get Obtenerarea (){
    return this.area();
   }
   
   get Obtenerperimetro (){
    return this.perimetro();
   }
} 
let Rectangulo1 = new Rectangulo (10,5);
console.log (Rectangulo1.area());
console.log (Rectangulo1.perimetro());
