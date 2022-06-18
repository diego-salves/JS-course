function even(a, b){
    a++;
    for(a; a < b; a++){
        if (a % 2 != 0){
            console.log(a);
        }else{
            continue;
        }}    
}



even(31, 103);
