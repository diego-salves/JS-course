console.log(nome); // undefined - aqui ocorre o Hoisting, "Iça" a declaração da variável, literalmente cria o var nome; acima e tira o var da linha de  baixo
var nome = "João";

console.log(nome);

//see the result

//apenas acontece com var


