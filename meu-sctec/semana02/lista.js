let contador = 10

while (contador > 0) {
  contador = contador - 3
}

console.log(contador)

for (let i = 1; i <= 5; i++) {
  console.log(i)
}

function somar(a, b) {
  return a + b
}
let resultado = somar(3, 7)
console.log(resultado)

function verificarPar(numero) {

    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }

}


function verificarPar(numero) {
if (numero % 2 === 0) {
return true
} else {
return false
}
}
console.log(verificarPar(8))
console.log(verificarPar(5))
