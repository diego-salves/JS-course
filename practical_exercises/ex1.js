/*
1) Crie uma função que receba como parâmetro de entrada o objeto abaixo e imprima no console a string
de saída, conforme:

/saída
O usuário mora em Campo Grande/MS, no bairro Cachoeira, na Rua da Paz, número 42.
*/


//objeto de entrada da função
let endereco = {
    rua: "Rua da paz",
    numero: 42,
    bairro: "Cachoeira",
    cidade: "Campo Grande",
    uf: "MS"
};

function print(user){
    console.log(`O usuário mora em ${user.cidade}/${user.uf}, no bairro ${user.bairro}, na ${user.rua}, número ${user.numero}.`)
};

print(endereco)