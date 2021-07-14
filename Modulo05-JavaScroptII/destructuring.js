// Objetos Destructuring

const pessoa = {
    nome:"Laisa",
    idade: 29,
    cidade: "Rio de Janeiro"
}
console.log("Sem destructuring: ")
// Notação de ponto
console.log(pessoa.nome)// "Laisa"

// Notação de colchetes
console.log(pessoa['idade'])// 29
console.log("\n")
// Notação de destruturing - desestruturar Objetos
const {nome, idade, cidade} = pessoa
console.log("Com destructuring: ")
console.log(nome)
console.log(idade)
console.log(cidade)

console.log("\n")

const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentario sobre tecnologia.",
        duracao:120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror legal demais.",
        duracao:120
    },
    {
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspense bem legal.",
        duracao:120
    }
]
const [{id, titulo, descricao, duracao }]= filmes
console.log(titulo)

filmes.map(filme => console.log(filme.descricao))