var cliente = {
    nome: "Xuxa",
    email: "xuxa@gmail.com",
    telefone: "666 - 6666",
    rua: "Rua dos Baixinhos",
    numero: "666",
    bairro: "Pinheiros",
    cidade: "São Paulo",
    uf: "SP"
} 

function teste(cli){
    var nome = cli.nome, cidade = cli.cidade, uf = cli.uf;
    var result = (`O cliente ${nome} mora em ${cidade}, ${uf}.`)
    console.log(result)
}

teste(cliente)
