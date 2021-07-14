// Tipos em TypeScript

// Boolean
const contaPaga: boolean = false;

// Number
const idade:Number = 29;
const avaliacao:number = 4.5;

//String
const nome:string = 'Laisa Lamir';

// Array
const idades: number[]= [23, 28, 45];
const idades2: Array<number> = [7, 21, 49, 62];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Vanessa', 'Laisa', 'Camila'];

let dados: [string, number, boolean];
dados= ['Laisa', 29, true];

// Enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaApi: any[]= [123, 'Laisa', false];
const retornoDaApi2: any= { 
    //... Any pode ser qualquer coisa
};

//Void = é pra dizer quando uma função não retorna nada
function printNaTela(msg:string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null= null;

// Object = Um tipo não primitivo 
function criar(objecto:object){
    //...
}
criar({
    propriedade: 1,
})

// Never é um tipo que numca termina. E pode se usada para erro.
function loopInfinito(): never{
    while(true){}
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}
function falha(){
    return erro('Algo falhou');
}

// Multipolos tipos com Union Types
// quando pode ter mais de um tipo
const nota: string | number = 5;
function exibirNota(nota: number| string){
    console.log(`A nota é: ${nota}`);
}
exibirNota('10');
exibirNota(10);

//Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<string> ;
const funcionarios: Array<Funcionario> = [{ 
    nome: 'Laisa',
    sobrenome: 'Lamir',
    dataNascimento: new Date()
    //('Vitor', 'Laisa', 'Fulano', 'Ciclano'];
},{
    nome: 'Camila',
    sobrenome: 'Silva',
    dataNascimento: new Date()

}];
function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário: ', funcionario.nome)
    }
}

// Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Laisa',
    telefone1: '123456789',
    // O ponto de interrogaçáo na variavel telefone2 faz com que seja opcional atribuir um numero.
    
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);