function corrige(customer){
    console.log("O(a) cliente " + customer.nome + " mora em " + customer.cidade + ", " + customer.uf + ".");
}


var cliente = {
    nome: "Maria das Graças Xuxa Meneguel",
    email: "xuxa@666.com",
    telefone: "+55 11 666-6566",
    rua: "Ruas dos Baixinhos",
    numero: "666",
    bairro: "Pinheiros",
    cidade: "São Paulo",
    uf: "SP"
}

corrige(cliente)

