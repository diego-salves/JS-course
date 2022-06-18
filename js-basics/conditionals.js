//if , else if, else
var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

// && = and  || = or ! = not 
if(idade >= 18) {
    console.log("Maior de idade");
}else if (idade < 18 && idade > 12) {
    console.log("Adolescente");
} else {
    console.log("Criança")
}

//switch

var sexo = 'm';

switch(sexo){
    case 'm':
        console.log("Masculino");
        break;
    case 'f':
        console.log("Feminino");
        break;
    default:
        console.log("Desconhecido");
        break;
}

//Simplificando if
var s = 'm';
var masculino;


var masc = (s === 'm');  //recebe true ou false de acordo com a operação, poderia ser sem parenteses
console.log(masc);