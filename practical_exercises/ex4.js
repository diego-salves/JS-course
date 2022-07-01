/*
4) Crie uma função que receba um inteiro como parâmetro de entrada sendo os anos de experiência de um
programador e imprima qual é o tipo de programador de acordo com esta experiência em anos.

Entre 0 e 1 ano: Iniciante
Entre 1 e 3 anos: Intermediário
Entre 3 e 6 anos: Avançado
Igual ou maior a 7 anos: Jedi Fucking Master
*/

function programmingLevel(yoe){
    //yoe = years of experience
    if(yoe == 0 || yoe == 1){
        console.log('Iniciante');
    }else if(yoe > 1 && yoe <= 3){
        console.log('Intermediário');
    }else if(yoe >= 4 && yoe <= 6){
        console.log('Avançado');
    }else if(yoe >= 7){
        console.log('Jedi Fucking Master');
    }else{
        console.log("valor inválido")
}};


let yoe = 8;
programmingLevel(yoe);