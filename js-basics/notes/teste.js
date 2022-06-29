var prices = [4.99, 5.99, 3.99, 2.00, 1.99];

function adicionar_taxa(valor){
    return valor + 5;
}

function somar (anterior, atual){
    return anterior + atual;
}

function price_higher_than_4(price){
    return price > 4;
};

var ret = prices.filter(price_higher_than_4).map(adicionar_taxa).reduce(somar);

console.log(ret);
