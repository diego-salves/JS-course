//operadores lógicos

if (curso === 'Javascript' && legal === true) {
    console.log('Curso Javascript é legal');
}else{
    console.log('Curso Javascript não é legal');
}

// no AND ambos precisam ser true

if (curso === 'Javascript' || legal === true) {
    console.log('Curso Javascript é legal');
}else{
    console.log('Curso Javascript não é legal');
}

//no OR um ou outro precisa ser true

if (curso != 'Javascript') {
    console.log('Curso é Javascript');
}else{
    console.log('Curso não é Javascript');
}
//o NOT inverte o valor

//Operadores Relacionais
// !== diferente e de outro tipo que