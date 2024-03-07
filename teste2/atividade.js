const produtos = [
    { nome: "Caneta", qtde: 20, valor: 2.50 },
    { nome: "Caderno", qtde: 10, valor: 15.00 },
    { nome: "Tesoura", qtde: 35, valor: 5.50 },
    { nome: "Impressora", qtde: 2, valor: 699.99 },
    { nome: "Celular", qtde: 3, valor: 1500 },
    { nome: "Tenis", qtde: 1, valor: 2000 },
    { nome: "Caneca", qtde: 0, valor: 35 }
]

/*
Percorrer o array de produtos e retornar um novo array
com 3 produtos, escolhidos de forma aleatoria
e não pode haver repetição de produtos
*/

const tam = produtos.length
let numero = []
const array2 = new Array
//let numero = Math.floor(Math.random() * produtos.length)

//function gerarNumero() {
do {
    for (let i = 0; i <= 2; i++) {
        numero[i] = Math.floor(Math.random() * 6)
    }
} while (numero[0] == numero[1] || numero[0] == numero[2] || numero[1] == numero[2])
//}

for (let x = 0; x <= 2; x++) {
    array2[x] = produtos[numero[x]]
}

console.log(array2)