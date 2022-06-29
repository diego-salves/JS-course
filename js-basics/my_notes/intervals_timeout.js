//intervalos e timeout

function escrever() {
    console.log("Olá mundo!");
}

setInterval(escrever, 1000); //milisegundos, executa a função 1 vez a cada segundo

//timeout, executa apenas uma vez, com um delay

setTimeout(escrever, 3000) // executa após 3 segundos

