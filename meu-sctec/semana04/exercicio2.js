const prompt = require("prompt-sync")()

function exibirMenu(){
    console.log("1 - Registrar Atividade" )
    console.log("2 - Ver Histórico" )
    console.log("3 - Ver Resumo" )
    console.log("0 - Sair" )
}

let opcao 
let opcoesValidas = ["1", "2", "3", "0"]
do {
    exibirMenu()

    opcao = prompt("Escolha uma opção do menu (Informe em número): ")

    if (!opcoesValidas.includes(opcao)){
        console.log("Opção inválida")
    }

 } while (opcao !== "0")
    
    console.log("Programa encerrado")

