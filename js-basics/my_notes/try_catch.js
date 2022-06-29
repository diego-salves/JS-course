//Tratamento de erros

//console.log(name); //ReferenceError: name is not defined


try {
    console.log(name);
}	catch(err) {
    console.log("Erro de referencia:" + err);
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log(err.fileName);
    console.log(err.lineNumber);
    console.log(err.columnNumber);
}

console.log("Continue after error");

//sem o try catch o programa não teria continuado para a linha 12

//Launching Errors

function divide(a, b) {
    if(a == 0 || b == 0) {
        throw("Divisão por zero"); //throwing exception
    }else{
        return a / b;
    }
}

let ret = divide(10, 2);
console.log(ret);

try{
    let ret2 = divide(10, 0);
    console.log(ret2);
}catch(err){
    console.log("Not allowed to divide by zero");
}finally{
    console.log("Let's continue");
}

//finally é sempre executado, independente de ter ou não erro