function nivel(n){  
    if(n>=0 && n<= 2){
        console.log("júnior")
    }else if(n>2 && n<=5){
        console.log("pleno")
    }else if(n>=6){
        console.log("senior")
    }else{
        console.log("invalido")
    }
};



nivel(-10);