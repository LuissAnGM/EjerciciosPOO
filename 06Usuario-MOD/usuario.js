export class usuario {
    #nombre
    #password
    constructor(nombre,password){
        this.#nombre = nombre;
        this.#password = password;
    }

    #validarPassword(contrasenia){
        return contrasenia.length >= 4;
    }
    cambiarNombre(user){
        this.#nombre = user;
    }
    
    #validarUsuario(user){
        return user.length >= 4;
    }
    login(pass,user)
    {
        if (this.#validarPassword(pass) && this.#validarUsuario(user)){
            console.log(`bienvenido ${this.#nombre}`)
        } else {
            console.log(`No cumple con el long de usuario o password`)
        }
    }

    datosUser (){
        console.log(`El nombre del usuario es ${this.#nombre}`)
    }
}

