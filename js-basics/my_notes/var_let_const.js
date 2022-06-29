//Sempre declare variáveis usando let, é a forma mais moderna. Evita erros no programa e melhora o código, mantém o escopo local.

//var tem escopo global!
// O escopo é definido a partir das chaves {}

//Corre o risco também de redeclarar variáveis com o mesmo nome.

// const como o nome diz é constante, não pode ser alterada.

//Constante vs Mutação

const curso = {nome: "JavaScript"};
console.log(curso.nome);

//Podemos realizar mutações em dados contidos em uma constante.

curso.nome = "JavaScript Avançado";
console.log(curso.nome);