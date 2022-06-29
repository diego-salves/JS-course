//Formas de criar arrays

//Forma 1
var alunos = new Array("Cristina", "João", "Ricardo");
console.log(alunos);

//Forma 2 [recomendada]

var notas = [1, 3, 5, 7, 9];
console.log(notas);

//acessando indice

console.log(notas[2])

//alterando indice

notas[2] = 12;
console.log(notas);

//Inserindo dados no final do array

alunos.push("Carlos");
console.log(alunos);

//Tamanho do array
console.log(alunos.lenght);

//Ordenados dados de um array (strings)
alunos.sort();
console.log(alunos);

//transforma em string e ordena caso usemos floats/int
var num = [11.23, 24.25, 12.45, 123.89];
//num.sort();


//como fazer
num.sort(function(a, b){return a - b;});

console.log(num);

//Deletar dados de array
delete alunos[3]; //fica undefined

//
alunos.splice(3, 1); //A partir do indice 3, delete 1 elemento
console.log(alunos); //recomendado, nao deixa empty space

alunos.splice(3, 0, "Diego", "Bruno") //A partir do indice 3, não delete nenhum, adicione Diego e Bruno
console.log(alunos);

//se fizer splice (indice, 1) altera o valor

//Iterar em um array

for(var i = 0; i< alunos.length; i++){
    console.log([alunos[i]]);
}

//removendo último dado do array
var teste_pop = alunos.pop();  //pop remove e retorna o elemento, dá pra recuperar o valor 
console.log(alunos);
console.log(teste_pop);

//removendo o primeiro elemento do array
var teste_shift = alunos.shift();     //assim como o pop, retorna o valor
console.log(teste_shift);
console.log(alunos);

//adicionando elementos no início do array
alunos.unshift("Astrid");
console.log(alunos);

//retornar um novo array a partir o índice informado

var novo = alunos.slice(2);
console.log(novo);

//outra forma: 
var novo2 = alunos.slice(1, 3); //a partir do indice 2 pega até o indice 3 sem inclui-lo
console.log(novo2);

//concatenando arrays

var pares = [2, 4, 6, 8];
var impares = [1, 3, 5, 7, 9];

var concatenando = pares.concat(impares);   //concatena os 2 arrays, coloca pares primeiro
console.log(concatenando); 

concatenando.sort(function(a, b){return(a - b)});
console.log(concatenando);

//arrays de arrays = matrizes ou array bidimensional
//4X4
var tabuleiro = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];

//representaçao visual
/*
[1,   2,  3,  4]    linha 0
[5,   6,  7,  8]    linha 1
[9,  10, 11, 12]    linha 2
[13, 14, 15, 16]    linha 3
*/
//linhas e colunas começam do indice 0

console.log(tabuleiro[0][0]); //linha 0, coluna 0
console.log(tabuleiro[3][3]); //linha 3, coluna 3

