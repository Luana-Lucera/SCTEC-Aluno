const carrinho = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 199.90 },
    { nome: "Boné", preco: 29.90 },
    { nome: "Meia", preco: 15.90 }
]

const total = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0);

console.log("Total do carrinho: R$", total.toFixed(2));
