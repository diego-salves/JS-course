function helloWorld() {
   alert("Hola mundo");
}

function perguntar() {
    var nome;
    nome = prompt("Qual o seu nome?");
    alert("Bem vindo " + nome);
}

function mudar_texto() {
    var h1 = document.getElementsByTagName("h1");
    if(h1[0].innerText == "Javascript Basics") {
        h1[0].innerText = "Javascript Fundamentals";
	}else{
        h1[0].innerText = "Javascript Basics"
    }
}
