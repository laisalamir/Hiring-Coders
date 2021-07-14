// array é poder atribuir uma variavel , passar os cochetes e colocar as informações

// Acessar informações num array
const alunasGama = ["Paula", "Maria", "Estela", "Clara"]
console.log(alunasGama[2])// "Estela"

// Operador spread (...)
// copia informações sem alterar o array original

const alunasXp = [...alunasGama, "Laisa", "Simara"]
console.log(alunasGama)
console.log(alunasXp)

// Metodos de iteração - passa por cada item


for (let i = 0; i < alunasXp.length; i++){
    console.log(alunasXp[i])
}
console.log("\n")
// metodo MAp espera uma function callback
alunasXp.map(aluna => console.log(aluna))
console.log("\n")
// filter - uma forma de receber um novo array com informações filtradas sem alterar o metodo anterior
const numeros = [34, 45, 67, 90, 55, 76]
const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)// retorna os numeros impares
const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)// retorna os numeros pares
console.log("\n")
// find
const produtos = ["geladeira", "fogao", "cama", "mesa"]
let imprimiProdutos = produtos.find(produto => produto === "cama")

console.log(imprimiProdutos)
console.log("\n")

// sort  (coloca o array em ordem)
const numerosOrdenadosCrescente = numeros.sort()
console.log( numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a, b) => b-a)
console.log(numerosOrdenadosDecrescente)
console.log("\n")

//reduce - reduz o nosso array a um resultado de uma operação matematica
const numbers = [ 1, 34, 35]
const soma3 = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
},20)// 20 acrescenta com o valor que ja tem no array
console.log(soma3)








