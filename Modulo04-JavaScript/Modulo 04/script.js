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

class Person{
    construtor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value) {
        this._name= value;
    }
}

let person = new Person('Laisa');
person.name = 'Lalinha'
console.log(person.name)

let resultado = fizzBuzz(15);
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

}*/
/*

let newStr = '';
function reverseAString(str){
    for(let i= str.length -1; i>=0; i--){
        newStr += str[i];
        console.log(newStr);
    }
    console.log(newStr);
}

let resultado = reverseAString('Hello Gama Academy');

-----------------------------------------

function convertToFahrenheit(value){
    return value * 1.8 + 32
}

let result = convertToFahrenheit(1)
console.log(`O valor em Fahrenheit é: ${result}`)*/

let test = function(){
    const name;
    let fullName = name + "" santos"";
    console.log(fullName);
    }
