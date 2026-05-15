// Classe ContaBancaria
class ContaBancaria {

    // O constructor é executado quando criamos uma nova conta
    constructor(titular) {

        // this representa o próprio objeto criado
        this.titular = titular;

        // saldo começa em 0
        this.saldo = 0;
    }

    // Método para depositar dinheiro
    depositar(valor) {

        // soma o valor ao saldo atual
        this.saldo += valor;

        console.log(`Depósito de R$ ${valor} realizado.`);
    }

    // Método para sacar dinheiro
    sacar(valor) {

        // verifica se há saldo suficiente
        if (valor <= this.saldo) {

            // subtrai o valor do saldo
            this.saldo -= valor;

            console.log(`Saque de R$ ${valor} realizado.`);

        } else {

            console.log("Saldo insuficiente");
        }
    }

    // Método para mostrar o extrato
    extrato() {

        console.log(`Titular: ${this.titular} | Saldo: R$ ${this.saldo}`);
    }
}


// ==========================
// TESTE DO SISTEMA
// ==========================

// Criando uma nova conta
let conta1 = new ContaBancaria("Nelson");

// Depositando 500
conta1.depositar(500);

// Sacando 200
conta1.sacar(200);

// Mostrando extrato
conta1.extrato();