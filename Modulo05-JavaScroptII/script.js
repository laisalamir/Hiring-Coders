//Exemplo:
//numero 34 - Imprima na tela os numero pares existentes entre 0 e 100.

const { Console } = require("console")


for (let i=0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

// crie um algoriti,o que receba tres notas de um aluno, culcule a sua media e mostre as seguintes mensagens de acordo com cada situaçáo:

function calculaMedia(nota1,nota2,nota3){
    let media = (nota1+ nota2+nota3)/3

    if(media >= 7){
        return 'Aprovado'
    }
    if(media >= 5 && media < 7){
        return 'Recuperaçáo'
    }
    if(media < 5){
        return 'Reprovado'
    }
}

console.log(calculaMedia(3,1,4))


