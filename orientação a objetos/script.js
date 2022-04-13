class ContaBancaria {
    constructor(agencia, numero, tipo,) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;

        }
    

    sacar(valor) {
        if (valor > this._saldo) {
            return console.log('Operação negada');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, CartaoCredito ) {
        super(agencia, numero,);
        this.tipo = 'corrente';
        this._CartaoCredito = CartaoCredito;

    }

    get CartaoCredito() {
        return this._CartaoCredito;
    }

    set CartaoCredito(valor) {
        this._CartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'Universitária';
    }
    sacar(valor) {
    if (valor > 500) {
    return 'Operação negada.';
    }
    
    this._saldo = this._saldo - valor;
    return this._saldo;
    }
}