/*
variaveis sao usadas para armazenar dados, que podem ser utilizadas ou recupetdas sempre que necessário

console.log("Hello world!");

var myName ="Laisa Lamir";

console.log(myName);
//---------------------------------------------------------------

 boas patricas : pode suar $ _ para começar, mas o ideal é usar camel case.
não pode começar com numero, não pode dar espaço entre palavras ou usar palavras reservada para declarar uma variavel. 

formas de declarar uma variavel:
var - Estamos declarando uma variavel de escopo global; Podem ser atualizadas ou retribuidas dentro do escopo. Var sofre hosting de escopo.
let - Escopo bloqueado, ou seja, não conseguimos acessar fora da escopo. Pode ser atualizada.
const - Escopo bloqueado, ou seja, não conseguimos acessar fora da escopo. Nem atualizada e nem retribuida.


let language = "JavaScript";

const patter = "ECMAScript";

//---------------------------------------------------------------
{
    var age = 29;
}

console.log(age);

 hosting -- por debaixo dos panos.
*/

let resultado = fizzBuzz(30);
console.log(resultado);
function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um número';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';

    return entrada;

}

