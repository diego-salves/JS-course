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

