class usuario {
    #nombre
    #password
    constructor(nombre,password){
        this.#nombre = nombre;
        this.#password = password;
    }

    #validarPassword(contrasenia){
        return this.#password=contrasenia.length>=4;
    }
    #validarUsuario(user){
        return this.#nombre=user.length>=4;
    }

    login(pass,user){
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

const usuario1 = new usuario ("Luis","345")
usuario1.login("abcd","pepe")