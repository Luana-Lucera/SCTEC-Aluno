//Para executar: funcao-criar-perfil.js

//Adicionando 3 parametros a função criar perfil, sendo 1 opcional

function criarPerfil(nome,idade,cidade = "Não informada"){
    console.log("Nome:" + nome)
    console.log("Idade" + idade)
    console.log("Cidade" + cidade)
    console.log("Estado: SC")
    console.log("---")
    }
    criarPerfil("Yan", 38, "Florianópolis")