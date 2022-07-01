/*
Crie uma função que receba um array como entrada e verifique se neste array contém a habilidade
“JavaScript”. Imprima a informação conforme cada caso, de acordo com o esqueleto abaixo:
*/

function thereIsJavascript(skill){
    const js = 'javascript'
    for(let i = 0; i < skill.length; i++)
        if(skill[i] == js){
            var result = true
        }else{
            continue
        }

    if(result == true){
        console.log('knows JS');
    }else{
        console.log("doesn't know JS")
    }
}

skills1 = ['react', 'python', 'node'];

skills2 = ['linux', 'javascript', 'apex']

thereIsJavascript(skills1)

thereIsJavascript(skills2)