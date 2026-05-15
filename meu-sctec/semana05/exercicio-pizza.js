// CLASSE
// Classe é um "molde" para criar objetos.
//
// Pense assim:
//
// classe = projeto da pizza
// objeto = pizza pronta
//
// A classe define:
// - quais informações o objeto terá
// - quais ações ele poderá executar
//
class Pizza {

    // CONSTRUCTOR
    // constructor é um método especial executado
    // automaticamente quando criamos um novo objeto.
    //
    // Ele serve para receber os dados iniciais.
    //
    // Parâmetros:
    // sabor -> texto
    // tamanho -> P, M ou G
    // borda -> true ou false
    //
    constructor(sabor, tamanho, borda) {

        // THIS
        // this significa:
        //
        // "este objeto atual"
        //
        // Aqui estamos salvando os valores recebidos
        // dentro do objeto criado.
        //
        this.sabor = sabor;

        this.tamanho = tamanho;

        this.borda = borda;
    }


    // MÉTODO
    // Método é uma função que pertence à classe.
    //
    // Esta função calculará o valor da pizza.
    //
    calcularPreco() {

        // Variável para guardar o preço.
        let preco = 0;


        // IF / ELSE IF
        // Verifica qual tamanho foi escolhido.
        //
        // === significa:
        // "exatamente igual"
        //
        if (this.tamanho === "P") {

            preco = 25;

        } else if (this.tamanho === "M") {

            preco = 35;

        } else if (this.tamanho === "G") {

            preco = 50;
        }


        // VALIDAÇÃO DA BORDA
        //
        // Se this.borda for true:
        // adiciona R$ 8,00
        //
        if (this.borda === true) {

            preco += 8;
        }


        // RETURN
        // return devolve um valor para quem chamou a função.
        //
        return preco;
    }


    // MÉTODO RESUMO
    // Este método mostrará todas as informações da pizza.
    //
    resumo() {

        // OPERADOR TERNÁRIO
        // Forma curta de fazer IF/ELSE.
        //
        // condição ? valorSeVerdadeiro : valorSeFalso
        //
        let textoBorda = this.borda
            ? "com borda"
            : "sem borda";


        // Chamando outro método da própria classe.
        //
        // this.calcularPreco()
        //
        // calcula e devolve o valor da pizza.
        //
        let valorFinal = this.calcularPreco();


        // TEMPLATE STRING
        // Permite misturar texto e variáveis.
        //
        console.log(
            `Pizza ${this.tamanho} ${textoBorda} custará R$ ${valorFinal} reais`
        );
    }
}



// CRIANDO OBJETO
//
// new cria um novo objeto usando a classe Pizza.
//
let pizza1 = new Pizza(
    "Calabresa",
    "G",
    true
);


// CHAMANDO MÉTODO
//
// O ponto . acessa algo do objeto.
//
// pizza1.resumo()
//
// significa:
// "execute o método resumo do objeto pizza1"
//
pizza1.resumo();