//elemento que realiza uma ação

//first class citizens porque trabalha como qualquer outro tipo de dado

function somar (a, b) {
    return a + b;
}

const execute = somar;

console.log(execute(1, 2));

//Higher-Order Function

//quando função não retorna nada retorna undefined
//com return tem retorno explicito

let valores = [1, 3.4, true, somar]

for(let i = 0; i < valores.length; i++) {
    console.log(typeof(valores[i]));
}

//se passar multiplos parametros, separados por virgula, a funçao tenta executar com os existentes, se tiver menos que o necessário retorna NaN

function sum(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum());
console.log(sum(1, 2, 3, 4, 5));

//por padrão o JS cria um array chamado (arguments) que contém todos os parametros passados na função

function print_values(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
}}

print_values(1, 2, 3, 4, 5);

//default parameters

//Gambiarras

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

console.log(somar2(4, 5, 6));
console.log(somar2(4, 5));

//caso valor não seja passado a variavel recebe um valor padrão
//problema, se passar 0 considera false


//forma corrta
function somar3(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

//nesse caso não importa se não passsar um valor numérico
console.log(somar3('a', 'b', 'c'));

/*
EM JS 1 é igual a true e 0 é igual a false e vice-versa
*/

console.log(somar3(2, true, false)); //3

//como garantir que sejam numeros

function somar4(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não é um número';
    }
}

//Arrow Functions

//Formas simplificadas de criar funções

