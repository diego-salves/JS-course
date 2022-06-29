//escopo de variaveis

function somar(a, b){
    var valor = 5;
    return valor + a + b;
}

//valor variável local, dentro da função apenas

for (var i = 0; i < 5; i++) {
    var outra = 5;
    console.log(i * outra);
} 

//se declarado no for é global (for, if, se estiver no escopo global)
//se declarar com let é local, sempre usar let que possível
console.log(outra)
