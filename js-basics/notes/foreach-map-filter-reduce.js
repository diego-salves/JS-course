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