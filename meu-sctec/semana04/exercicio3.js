// feito com o chatgpt pago
// IMPORTAÇÃO DE BIBLIOTECAS
// require() serve para importar recursos externos para o projeto.
// Aqui estamos importando a biblioteca "prompt-sync",
// que permite receber dados digitados pelo usuário no terminal.
//
// const é usado porque NÃO queremos alterar o funcionamento
// do prompt durante o programa. Ele permanecerá fixo.
const prompt = require("prompt-sync")();


// ARRAY DE ATIVIDADES
// Array é uma estrutura de dados do tipo LISTA.
//
// Este array começa vazio e funcionará como um
// "banco de dados em memória".
//
// Tudo que o usuário cadastrar será guardado aqui.
//
// Exemplo futuro:
//
// [
//   {
//      exercicio: "Corrida",
//      distancia: 5,
//      tempoMinutos: 30
//   }
// ]
//
let atividades = [];


// ARRAY DE EXERCÍCIOS
// Este array já começa com valores.
//
// Cada item possui uma posição chamada ÍNDICE.
//
// IMPORTANTE:
// Arrays em JavaScript começam no índice 0.
//
// Índices reais:
//
// 0 -> Corrida
// 1 -> Caminhada
// 2 -> Ciclismo
// 3 -> Remo
// 4 -> Natação
//
let exercicios = [
    "Corrida",
    "Caminhada",
    "Ciclismo",
    "Remo",
    "Natação"
];


// FUNÇÃO
// Função é um bloco de código com nome.
//
// Serve para organizar o programa em pequenas tarefas.
//
// Esta função terá toda a responsabilidade de:
// - mostrar exercícios;
// - receber dados;
// - validar informações;
// - criar objeto;
// - salvar atividade.
//
function registrarAtividade() {

    // console.log() exibe mensagens no terminal.
    console.log("=== Exercícios Disponíveis ===");


    // LAÇO DE REPETIÇÃO (FOR)
    // O for é usado quando queremos repetir algo várias vezes.
    //
    // Estrutura:
    //
    // for (início; condição; incremento)
    //
    // Neste caso:
    //
    // let i = 0
    // começa o contador em zero.
    //
    // i < exercicios.length
    // repete enquanto i for menor que o tamanho do array.
    //
    // i++
    // aumenta 1 a cada repetição.
    //
    // exercicios.length retorna o tamanho do array.
    // Como temos 5 exercícios:
    //
    // exercicios.length = 5
    //
    for (let i = 0; i < exercicios.length; i++) {

        // TEMPLATE STRING
        // Usa crase ` `
        //
        // ${ } permite inserir variáveis dentro do texto.
        //
        // i + 1 é usado porque o usuário vê:
        //
        // 1 - Corrida
        //
        // mas internamente o índice começa em 0.
        //
        console.log(`${i + 1} - ${exercicios[i]}`);
    }


    // ENTRADA DE DADOS
    // prompt() espera o usuário digitar algo.
    //
    // IMPORTANTE:
    // prompt SEMPRE retorna TEXTO.
    //
    // Exemplo:
    //
    // usuário digita: 3
    //
    // o prompt retorna:
    //
    // "3"
    //
    // e não o número 3.
    //
    // Por isso usamos Number()
    // para converter texto em número.
    //
    let opcao = Number(
        prompt("Escolha o número do exercício: ")
    );


    // VALIDAÇÃO
    // if significa "SE".
    //
    // Estamos verificando:
    //
    // - se a opção é menor que 1
    // OU
    // - se a opção é maior que a quantidade de exercícios
    //
    // || significa "OU".
    //
    // Se alguma condição for verdadeira:
    // mostra erro e encerra a função.
    //
    if (opcao < 1 || opcao > exercicios.length) {

        console.log("Exercício inválido!");

        // return encerra imediatamente a função.
        //
        // Sem ele, o programa continuaria executando.
        return;
    }


    // ACESSO AO ARRAY PELO ÍNDICE
    //
    // Se o usuário digitar:
    //
    // 1
    //
    // precisamos acessar:
    //
    // exercicios[0]
    //
    // porque arrays começam em zero.
    //
    // Por isso usamos:
    //
    // opcao - 1
    //
    let exercicioEscolhido = exercicios[opcao - 1];


    // RECEBER DISTÂNCIA
    //
    // Novamente usamos Number()
    // porque prompt retorna texto.
    //
    let distancia = Number(
        prompt("Digite a distância em km: ")
    );


    // RECEBER TEMPO
    //
    // O valor será armazenado em minutos.
    //
    let tempoMinutos = Number(
        prompt("Digite o tempo em minutos: ")
    );


    // OBJETO
    // Objeto serve para agrupar informações relacionadas.
    //
    // Aqui estamos criando um objeto chamado novaAtividade.
    //
    // Estrutura:
    //
    // propriedade: valor
    //
    // Exemplo final:
    //
    // {
    //    exercicio: "Corrida",
    //    distancia: 5,
    //    tempoMinutos: 30
    // }
    //
    let novaAtividade = {

        // propriedade : valor
        exercicio: exercicioEscolhido,

        distancia: distancia,

        tempoMinutos: tempoMinutos
    };


    // PUSH
    // push() adiciona um novo item ao FINAL do array.
    //
    // Antes:
    //
    // []
    //
    // Depois:
    //
    // [
    //   {
    //      exercicio: "Corrida",
    //      distancia: 5,
    //      tempoMinutos: 30
    //   }
    // ]
    //
    atividades.push(novaAtividade);


    // \n cria uma quebra de linha.
    console.log("\nAtividade registrada com sucesso!\n");


    // Mostrar o array atualizado.
    //
    // Isso ajuda muito nos estudos,
    // porque você consegue visualizar
    // exatamente o que está sendo salvo.
    //
    console.log(atividades);
}


// CHAMADA DA FUNÇÃO
// A função foi criada acima,
// mas ela só executa quando é chamada.
//
// Sem esta linha,
// nada aconteceria.
//
registrarAtividade();