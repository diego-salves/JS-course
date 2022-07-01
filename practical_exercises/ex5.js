/*
Crie uma função que receba uma lista de objetos e apresente as saídas conforme exemplo abaixo:

// Saídas
O(a) programador(a) Julia Pascoal possui os skills:  Python, Bash e Linux
*/
var programadores = [
    {
        nome: "Julia Pascoal",
        skills: ["Python", "Bash", "Linux"]
    },
    {
        nome: "Patricia Silveira",
        skills: ["JavaScript", "Flutter", "Ruby"]
    }
];

function print_objects(array){
    array.forEach(element => {
        console.log(`O(a) programador(a) ${element.nome} possui os skills:  ${element.skills[0]}, ${element.skills[1]} e ${element.skills[2]}`)
    });
}

print_objects(programadores)
//console.log(programadores[0].nome)