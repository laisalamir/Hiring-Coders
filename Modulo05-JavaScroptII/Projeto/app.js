// npm init -y (Para iniciar um projeto node)
//npm i readline-sync (simular um usuario)


// pegar um input do usuario
// Se for sim, mostra as categorias disponiveis., pergunta qual categoria ela escolhe
//se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    //console.log(livro => livro.categoria)
    console.log('Produtividade e estilo de vida', '/Historia Brasileira', '/Americas', '/Tecnologia', '/Romance')

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
    const repetir = readline.question('Escolher outra categoria? S/N ')
    switch (repetir) {
        case 'S':
            console.log('Produtividade e estilo de vida', '/Historia Brasileira', '/Americas', '/Tecnologia', '/Romance')
            const entradaCategoria = readline.question('Qual categoria voce escolhe: ')
            const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
            console.table(retorno)
        case 'N':
            const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
            console.log('Essas são todas os livros disponiveis: ')
            console.table(livrosOrdenados)
            break;
        default:
            console.log('\nAté logo !')
    }

} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Essas são todas os livros disponiveis: ')
    console.table(livrosOrdenados)

}
