class Banca {
    constructor(Nombre, saldo, cuenta) {
        this.Nombre = Nombre;
        this.saldo = saldo;
        this.cuenta = cuenta;
    }
    MostrarInfo() {
        console.log(`Nombre del cliente: ${this.Nombre}. Número de cuenta: ${this.cuenta}. Saldo disponible: ${this.saldo}`);
    }
}

class CuentaAhorro extends Banca {
    constructor(Nombre, cuenta, saldo, comision) {
        super(Nombre, saldo, cuenta);
        this.comision = comision;
    }

    Deposito(monto) {
        this.saldo += monto;
        console.log(`Depósito de ${monto}. Saldo actual: ${this.saldo}`);
    }

    Retiro(monto) {
        monto <= this.saldo
            ? (this.saldo -= monto, console.log(`Retiro exitoso de ${monto}. Saldo actual: ${this.saldo}`))
            : console.log(`Saldo insuficiente. Saldo disponible: ${this.saldo}`);
    }
}

class CuentaCorriente extends Banca {
    constructor(Nombre, cuenta, saldo, limite, intereses) {
        super(Nombre, saldo, cuenta);
        this.limite = limite;
        this.intereses = intereses;
    }

    Prestar(monto) {
        monto <= this.limite
            ? (this.limite -= monto, console.log(`Préstamo exitoso de ${monto}. Crédito disponible: ${this.limite}`))
            : (this.intereses += monto * 0.1, console.log(`Préstamo excede el límite. Se cobró un interés de ${this.intereses}.`));
    }
}

let clientes = [];
clientes.push(new CuentaAhorro("Miguel G", 4569090, 2700, 50));
clientes.push(new CuentaCorriente("Luis G", 7890123, 10000, 2000, 100));

clientes.map(cliente => cliente.MostrarInfo());

clientes[0].Retiro(500);  
clientes[0].Retiro(5000);
clientes[1].Prestar(1500);
clientes[1].Prestar(3000); 