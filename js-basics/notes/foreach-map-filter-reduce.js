/*Foreach
*Calls a defined callback function on each element of an array, and returns an array that contains the results
*/

var cursos = [
    "programação",
    "algoritmos", 
    "python", 
    "java",
    "javascript",
];

console.log(cursos);

function print(curso, indice){
    console.log(indice + ' - ' + curso);
}

cursos.forEach(print); //para cada elemento dentro do array cursos, execute a função

//foreach sempre passa os 3 parametros (curso, indice, array)

// utilização de função anomina (lambda/callback) e template string

cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);         //template string, acessa variaveis através do $ e chave {}
});


//MAP

//mapeia os dados do array, transforma, gera um novo array de mesmo tamanho com dados alterados

var values = [2, 4, 6, 8, 10];

var dobro = values.map(function(valor){
    return valor * 2;
});

function dobrar(valor){
    return valor * 2
};

//console.log(dobro);

//encadeando maps

function somar_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}

var result = values.map(dobrar).map(somar_4).map(dividir_por_5);
console.log(result);

//diferença do foreach é que o map retorna um novo array

//FILTER

//cria novo array contendo apenas os valores filtrados

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(n){
    return n % 2 === 0;
}

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_de5(n){
    return n % 5 === 0;
}


var ret = numeros.filter(filtrar_pares);
console.log(ret);

ret = numeros.filter(filtrar_impares);
console.log(ret);

ret = numeros.filter(filtrar_multiplos_de5);
console.log(ret);

//se for true cria um novo array com os valores filtrados